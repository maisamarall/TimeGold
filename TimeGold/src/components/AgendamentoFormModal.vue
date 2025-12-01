<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
                <div class="flex justify-center items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        📆 Cadastrar Agendamento
                    </h2>
                    <button @click="$emit('fechar')"
                        class="text-gray-400 hover:text-gray-600 text-2xl leading-none justify-end absolute top-4 right-4"
                        aria-label="Fechar"> &times; </button>
                </div>

                <div v-if="profissionalLogado" class="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <p class="text-sm text-purple-700">
                        <strong>👤 Profissional:</strong> {{ profissionalLogado.name }}
                    </p>
                </div>

                <form @submit.prevent="salvarAgendamento" class="space-y-4">
                    <div v-if="apiErrors.length" class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p class="font-bold">Erro(s) de Validação:</p>
                        <ul class="list-disc list-inside mt-1">
                            <li v-for="(error, index) in apiErrors" :key="index">
                                <strong>{{ error.field || 'Sistema' }}:</strong> {{ error.message }}
                            </li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label class="label">Paciente:</label>
                            <input v-model="form.clientName" type="text" class="input" required placeholder="Nome Completo do Paciente" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label class="label">Profissional:</label>
                            <select 
                            v-model.number="form.schedulingTypeId" 
                            class="input" 
                            required 
                            :disabled="procedimentos.length === 0"
                        >
                            <option :value="null" disabled>
                                {{ procedimentos.length === 0 ? 'Carregando ou nenhum profissional cadastrado...' : 'Selecione o Profissional' }}
                            </option>
                            <option 
                                v-for="proc in procedimentos" 
                                :key="proc.id" 
                                :value="proc.id"
                            >
                                {{ proc.name }}
                            </option>
                        </select>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="label">Procedimento:</label>
                            <button type="button" @click="mostrarModalCadastroProcedimento = true"
                                class="text-xs text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1 p-1 rounded-md transition duration-150 border border-purple-200 hover:bg-purple-50"
                                :disabled="isLoading">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4"></path>
                                </svg>
                                Novo Cadastro
                            </button>
                        </div>

                        <select v-model.number="form.schedulingTypeId" class="input" required
                            :disabled="procedimentos.length === 0 || isLoading">
                            <option :value="null" disabled>
                                {{ carregandoProcedimentos ? 'Carregando procedimentos...' : 'Selecione o Procedimento'
                                }}
                            </option>
                            <option v-for="proc in procedimentos" :key="proc.id" :value="proc.id">
                                {{ proc.name }} (R$ {{ parseFloat(proc.value).toFixed(2) }})
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="label">Data e Horário:</label>
                        <input v-model="form.scheduledDate" type="datetime-local" class="input" required
                            :disabled="isLoading" />
                    </div>

                    <div class="flex justify-end gap-4 pt-4">
                        <button type="button" @click="$emit('fechar')" :disabled="isLoading"
                            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed">
                            Cancelar
                        </button>

                        <button type="submit" :disabled="isLoading || !profissionalLogado"
                            class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-150 disabled:bg-purple-400 disabled:cursor-not-allowed">
                            {{ isLoading ? 'Salvando...' : 'Salvar' }}
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>

    <SchedulingTypeFormModal v-if="mostrarModalCadastroProcedimento" :enterpriseId="enterpriseId"
        @fechar="mostrarModalCadastroProcedimento = false" @salvo="handleProcedimentoSalvo" />
</template>

<script>
import { schedulingService } from '@/services/schedulingService'
import { schedulingTypeService } from '@/services/schedulingTypeService'
import SchedulingTypeFormModal from '@/components/SchedulingTypeFormModal.vue'
import Swal from 'sweetalert2'
import { parseISO, format } from 'date-fns'

export default {
    name: 'AgendamentoFormModal',
    components: {
        SchedulingTypeFormModal
    },
    props: {
        enterpriseId: {
            type: Number,
            required: true
        },
        agendamento: {
            type: Object,
            default: null
        }
    },
    data() {
        const user = JSON.parse(localStorage.getItem("user")) || {};
        return {
            isLoading: false,
            carregandoProcedimentos: false,
            apiErrors: [],
            form: {
                clientName: '',
                professionalId: user.id || null,
                enterpriseId: user.enterpriseId || this.enterpriseId, 
                schedulingTypeId: null, 
                scheduledDate: '',
            },
            procedimentos: [],
            profissionalLogado: null,
            mostrarModalCadastroProcedimento: false,
        }
    },
    computed: {
        isEditMode() {
            return !!this.agendamento
        },
        selectedProcedureName() {
            return this.form.schedulingTypeName || ''
        }
    },
    mounted() {
        this.carregarProfissionalLogado()
        this.carregarProcedimentos()
        if (this.agendamento) {
            this.populateFromAgendamento(this.agendamento)
        }
    },
    watch: {
        enterpriseId(newId) {
            const user = JSON.parse(localStorage.getItem("user")) || {};
            this.form.enterpriseId = user.enterpriseId || newId;
        }
    },
    methods: {
        // Carregar Profissional do Login
        carregarProfissionalLogado() {
            try {
                const userJSON = localStorage.getItem('user')
                const sessionUserJSON = sessionStorage.getItem('user')
                const user = userJSON ? JSON.parse(userJSON) : (sessionUserJSON ? JSON.parse(sessionUserJSON) : null);

                if (user) {
                    this.profissionalLogado = user
                    if (!this.isEditMode) this.form.professionalId = user.id
                } else {
                    throw new Error('Nenhum profissional logado encontrado')
                }

            } catch (error) {
                console.error('[AgendamentoFormModal] Erro ao carregar profissional:', error)
                Swal.fire({
                    title: '❌ Erro!',
                    text: 'Você precisa estar logado para agendar. Faça login novamente.',
                    icon: 'error',
                    confirmButtonColor: '#D33'
                })
                this.$emit('fechar')
            }
        },

        // Carregar Procedimentos
        async carregarProcedimentos() {
            this.carregandoProcedimentos = true
            try {
                const data = await schedulingTypeService.listarTipoAgendamento(1, 100, '')
                this.procedimentos = data.items || data || []
                if (this.form.schedulingTypeId && !this.form.schedulingTypeName) {
                    const proc = this.procedimentos.find(p => p.id === this.form.schedulingTypeId || p.id === Number(this.form.schedulingTypeId))
                    if (proc) this.form.schedulingTypeName = proc.name || proc.description || null
                }
            } catch (error) {
                console.error('[AgendamentoFormModal] Erro ao carregar procedimentos:', error)
            } finally {
                this.carregandoProcedimentos = false
            }
        },

        // Preencher formulário
        populateFromAgendamento(ag) {
            try {
                this.form.id = ag.id ?? null
                this.form.clientName = ag.clientName || ag.paciente || ''
                this.form.professionalId = ag.professionalId || this.profissionalLogado?.id || null
                this.form.enterpriseId = ag.enterpriseId || this.enterpriseId
                this.form.schedulingTypeId = ag.schedulingTypeId || null
                this.form.schedulingTypeName = ag.schedulingTypeName || ag.procedimento || null

                if (ag.scheduledDate) {
                    try {
                        const dt = parseISO(ag.scheduledDate)
                        this.form.scheduledDate = format(dt, "yyyy-MM-dd'T'HH:mm")
                    } catch (e) {
                        this.form.scheduledDate = ag.scheduledDate
                    }
                } else {
                    this.form.scheduledDate = ''
                }
                this.form.status = ag.status ?? 1
            } catch (e) {
                console.error('[AgendamentoFormModal] Erro ao popular form:', e)
            }
        },

        // Ao salvar novo procedimento
        handleProcedimentoSalvo() {
            this.carregarProcedimentos()
            this.mostrarModalCadastroProcedimento = false

            Swal.fire({
                title: '✅ Procedimento Salvo!',
                text: 'O novo procedimento já está disponível na lista.',
                icon: 'success',
                confirmButtonColor: '#7021D8',
                timer: 2000
            })
        },

        // Validar formulário
        validarFormulario() {
            this.apiErrors = []

            if (!this.form.clientName || this.form.clientName.trim().length < 3) {
                this.apiErrors.push({
                    field: 'Cliente',
                    message: 'Nome do cliente deve ter no mínimo 3 caracteres.'
                })
            }

            if (/\d/.test(this.form.clientName)) {
                this.apiErrors.push({
                    field: 'Cliente',
                    message: 'Nome do cliente não pode conter números.'
                })
            }

            if (!this.form.professionalId || this.form.professionalId <= 0) {
                this.apiErrors.push({
                    field: 'Profissional',
                    message: 'Profissional não identificado. Faça login novamente.'
                })
            }

            if (!this.form.schedulingTypeId || this.form.schedulingTypeId <= 0) {
                this.apiErrors.push({
                    field: 'Procedimento',
                    message: 'Selecione um procedimento'
                })
            }

            if (!this.form.scheduledDate) {
                this.apiErrors.push({
                    field: 'Data/Horário',
                    message: 'Informe a data e horário do agendamento'
                })
            }

            return this.apiErrors.length === 0
        },

        localToISO(local) {
            if (!local) return null
            const [datePart, timePart] = String(local).split('T')
            if (!datePart || !timePart) return local
            const [year, month, day] = datePart.split('-').map(Number)
            const [hour, minute] = timePart.split(':').map(Number)
            const d = new Date(year, month - 1, day, hour, minute, 0, 0) 
            return d.toISOString() 
        },

        // Salvar
        async salvarAgendamento() {
            if (!this.validarFormulario()) return

            this.apiErrors = []
            this.isLoading = true

            if (!this.form.schedulingTypeId) {
                this.apiErrors.push({ field: 'Procedimento', message: 'Selecione um procedimento.' });
                this.isLoading = false;
                return;
            }
            
            // Converte horário local para UTC (Brasil = UTC-3)
            const [date, time] = this.form.scheduledDate.split('T');
            const [year, month, day] = date.split('-').map(Number);
            const [hour, minute] = time.split(':').map(Number);
            const localDate = new Date(year, month - 1, day, hour, minute, 0);
            const scheduledDateISO = localDate.toISOString();

            const payload = {
                clientName: this.form.clientName,
                professionalId: this.form.professionalId,
                enterpriseId: this.form.enterpriseId,
                schedulingTypeId: this.form.schedulingTypeId,
                scheduledDate: scheduledDateISO,
            };

            try {
                console.log('[AgendamentoFormModal] Payload =>', payload)

                let response
                if (this.isEditMode) {
                    response = await schedulingService.atualizarAgendamento(payload)
                    console.log('[AgendamentoFormModal] Atualização resposta:', response)
                } else {
                    response = await schedulingService.criarAgendamento(payload)
                    console.log('[AgendamentoFormModal] Criação resposta:', response)
                }

                this.$emit('salvo', response?.data ?? response)
                this.$emit('fechar')
                this.resetarForm()

                Swal.fire({
                    title: this.isEditMode ? '✅ Agendamento Atualizado!' : '✅ Agendamento Criado!',
                    text: this.isEditMode ? `Agendamento atualizado para ${this.form.clientName}.` : `Agendamento para ${this.form.clientName} confirmado!`,
                    icon: 'success',
                    confirmButtonColor: '#7021D8',
                    timer: 2000
                })

            } catch (error) {
                console.error('[AgendamentoFormModal] Erro ao salvar:', error)
                const apiErrorData = error.response?.data || error
                if (Array.isArray(apiErrorData)) {
                    this.apiErrors = apiErrorData
                } else if (apiErrorData && typeof apiErrorData === 'object' && apiErrorData.message) {
                    this.apiErrors = [{ message: apiErrorData.message, field: apiErrorData.field || 'Sistema' }]
                } else {
                    this.apiErrors = [{ message: 'Erro inesperado ao salvar o agendamento.', field: 'Sistema' }]
                }

                Swal.fire({
                    title: '❌ Erro!',
                    html: this.apiErrors.map(e => `<strong>${e.field || 'Sistema'}:</strong> ${e.message}`).join('<br>'),
                    icon: 'error',
                    confirmButtonColor: '#D33'
                })
            } finally {
                this.isLoading = false
            }
        },

        resetarForm() {
            const user = JSON.parse(localStorage.getItem("user")) || {};
            this.form = {
                clientName: '',
                professionalId: user.id || null,
                enterpriseId: user.enterpriseId || this.enterpriseId,
                schedulingTypeId: null,
                schedulingTypeName: null,
                scheduledDate: '',
            }
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #374151;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s;
}

.input:focus {
    border-color: #7021D8;
    box-shadow: 0 0 0 2px rgba(112, 33, 216, 0.2);
}

.input:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
}

.label {
    display: block;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.3s ease-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>