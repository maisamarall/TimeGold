<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
                <div class="flex justify-center items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        📆 Editar Agendamento #{{ agendamento.id }}
                    </h2>
                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none justify-end absolute top-4 right-4"
                        aria-label="Fechar"> &times; </button>
                </div>

                <form @submit.prevent="salvarEdicao" class="space-y-4">
                    <div v-if="apiErrors.length" class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p class="font-bold">Erro(s) de Validação:</p>
                        <ul class="list-disc list-inside mt-1">
                            <li v-for="(error, index) in apiErrors" :key="index">
                                **{{ error.field || 'Sistema' }}**: {{ error.message }}
                            </li>
                        </ul>
                    </div>
                    
                    <div class="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label class="label">Paciente:</label>
                            <input v-model="form.paciente" type="text" class="input" required />
                        </div>
                    </div>
                    
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="label">Procedimento:</label>
                            <button type="button" 
                            @click="mostrarModalCadastroProcedimento = true"
                            class="text-xs text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1 p-1 rounded-md transition duration-150 border border-purple-200 hover:bg-purple-50">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Novo Cadastro
                            </button>
                        </div>
                        
                        <select 
                            v-model.number="form.schedulingTypeId" 
                            class="input" 
                            required 
                            :disabled="procedimentos.length === 0"
                        >
                            <option :value="null" disabled>
                                {{ procedimentos.length === 0 ? 'Carregando ou nenhum procedimento cadastrado...' : 'Selecione o Procedimento' }}
                            </option>
                            <option 
                                v-for="proc in procedimentos" 
                                :key="proc.id" 
                                :value="proc.id"
                            >
                                {{ proc.name }} (R$ {{ proc.value ? proc.value.toFixed(2) : '0.00' }})
                            </option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div class="sm:col-span-2">
                            <label class="label">Data e Hora:</label>
                            <input v-model="form.scheduledDate" type="datetime-local" class="input" required />
                        </div>
                        <div>
                            <label class="label">Status:</label>
                            <select v-model.number="form.status" class="input" required>
                                <option :value="1">Pendente</option>
                                <option :value="2">Em andamento</option>
                                <option :value="3">Concluído</option>
                                <option :value="4">Cancelado</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-end pt-4">
                        <button type="submit" :disabled="isLoading"
                            class="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                            {{ isLoading ? 'Salvando...' : 'Salvar Edição' }}
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
    
    <SchedulingTypeFormModal
        v-if="mostrarModalCadastroProcedimento"
        :enterpriseId="form.enterpriseId"
        @fechar="mostrarModalCadastroProcedimento = false"
        @salvo="handleProcedimentoSalvo"
    />
    
</template>
<script>
import { schedulingService } from '@/services/schedulingService'; 
import { schedulingTypeService } from '@/services/schedulingTypeService'; 
import SchedulingTypeFormModal from '@/components/SchedulingTypeFormModal.vue'; 
import { format, parseISO } from 'date-fns';

export default {
    name: 'EditAgendamentoModalComponent',
    components: {
        SchedulingTypeFormModal
    },
    props: {
        agendamento: { 
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoading: false,
            apiErrors: [],
            form: {
                id: null,
                paciente: '',
                professionalId: null,
                enterpriseId: null,
                schedulingTypeId: null,
                scheduledDate: '',
                status: 0, 
            },
            procedimentos: [],
            mostrarModalCadastroProcedimento: false,
        }
    },
    watch: {
        agendamento: {
            immediate: true,
            handler(newAgendamento) {
                if (newAgendamento && newAgendamento.id) {
                    this.form = {
                        id: newAgendamento.id,
                        paciente: newAgendamento.paciente,
                        professionalId: newAgendamento.professionalId,
                        enterpriseId: newAgendamento.enterpriseId,
                        schedulingTypeId: newAgendamento.schedulingTypeId, 
                        scheduledDate: newAgendamento.scheduledDate ? format(parseISO(newAgendamento.scheduledDate), "yyyy-MM-dd'T'HH:mm") : '',
                        status: newAgendamento.status,
                    };
                    this.carregarProcedimentos();
                }
            }
        }
    },
    methods: {
        async carregarProcedimentos() {
            try {
                if (this.form.enterpriseId) {
                    const data = await schedulingTypeService.listarTipoAgendamento(1, 100, ''); 
                    this.procedimentos = data.items || data; 
                }
            } catch (error) {
                console.error("Erro ao carregar procedimentos:", error);
            }
        },

        handleProcedimentoSalvo() {
            this.carregarProcedimentos(); 
        },
        
        async salvarEdicao() {
            this.apiErrors = [];
            this.isLoading = true;

            if (!this.form.schedulingTypeId) {
                this.apiErrors.push({ field: 'Procedimento', message: 'Selecione um procedimento.' });
                this.isLoading = false;
                return;
            }
            
            const scheduledDateObject = parseISO(this.form.scheduledDate);
            const scheduledDateISO = scheduledDateObject.toISOString();
            
            const payload = {
                id: this.form.id,
                paciente: this.form.paciente,
                professionalId: this.form.professionalId,
                enterpriseId: this.form.enterpriseId,
                schedulingTypeId: this.form.schedulingTypeId,
                scheduledDate: scheduledDateISO,
                status: this.form.status,
            };

            try {
                await schedulingService.atualizarAgendamento(payload); 
                
                this.$emit('salvo');
                this.$emit('fechar');
            } catch (error) {
                if (Array.isArray(error) && error.every(e => e.message)) {
                    this.apiErrors = error;
                } else {
                    this.apiErrors = [{ message: 'Erro inesperado ao atualizar o agendamento.', field: 'Sistema' }];
                    console.error('Erro de API:', error);
                }
            } finally {
                this.isLoading = false;
            }
        },
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

.label {
    display: block;
    font-weight: 500;
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 0.25rem;
}

/* Animação */
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.2s ease-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>