<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
    <transition name="fade-scale">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
        <div class="flex justify-center items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-700">
            📆 Editar Agendamento - {{ form.paciente }}
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

        <form @submit.prevent="salvarEdicao" class="space-y-4">
          <div v-if="apiErrors.length" class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p class="font-bold">Erro(s) de Validação:</p>
            <ul class="list-disc list-inside mt-1">
              <li v-for="(error, index) in apiErrors" :key="index">
                **{{ error.field || 'Sistema' }}**: {{ error.message }}
              </li>
            </ul>
          </div>

          <div>
            <label class="label">Nome do Paciente:</label>
            <input v-model="form.clientName" type="text" class="input" required
              placeholder="Digite o nome completo do paciente" :disabled="isLoading" />
          </div>

          <div>

            <div class="flex justify-between items-center mb-2">
              <label class="label">Procedimento:</label>
              <button type="button" @click="mostrarModalCadastroProcedimento = true"
                class="text-xs text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1 p-1 rounded-md transition duration-150 border border-purple-200 hover:bg-purple-50"
                :disabled="isLoading">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Novo Cadastro
              </button>
            </div>

            <select v-model.number="form.schedulingTypeId" class="input" required
              :disabled="procedimentos.length === 0 || isLoading">
              <option :value="null" disabled>
                {{ carregandoProcedimentos ? 'Carregando procedimentos...' : 'Selecione o Procedimento' }}
              </option>
              <option v-for="proc in procedimentos" :key="proc.id" :value="proc.id">
                {{ proc.name }} (R$ {{ parseFloat(proc.value).toFixed(2) }})
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
              <select v-model.number="form.status" class="input" :disabled="isLoading">
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

  <SchedulingTypeFormModal v-if="mostrarModalCadastroProcedimento" :enterpriseId="form.enterpriseId"
    @fechar="mostrarModalCadastroProcedimento = false" @salvo="handleProcedimentoSalvo" />
</template>

<script>
import { schedulingService } from '@/services/schedulingService';
import { schedulingTypeService } from '@/services/schedulingTypeService';
import SchedulingTypeFormModal from '@/components/SchedulingTypeFormModal.vue';
import { format, parseISO } from 'date-fns';
import Swal from 'sweetalert2'

export default {
  name: 'EditAgendamentoModalComponent',
  emits: ['fechar', 'salvo'],
  components: { SchedulingTypeFormModal },
  props: {
    agendamento: {
      type: Object,
      required: true
    },
    enterpriseId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      carregandoProcedimentos: false,
      apiErrors: [],
      form: {
        id: null,
        clientName: '',
        clientId: 1,
        professionalId: null,
        enterpriseId: this.enterpriseId,
        schedulingTypeId: null,
        scheduledDate: '',
        status: 1,
      },
      procedimentos: [],
      profissionalLogado: null,
      mostrarModalCadastroProcedimento: false,
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
    agendamento(newVal) {
      if (newVal) {
        this.populateFromAgendamento(newVal)
      }
    },
    enterpriseId(newId) {
      this.form.enterpriseId = newId
    }
  },
  methods: {
    // Carregar Profissional do Login
    carregarProfissionalLogado() {
      try {
        const userJSON = localStorage.getItem('user')
        const sessionUserJSON = sessionStorage.getItem('user')
        const user = userJSON ? JSON.parse(userJSON) : (sessionUserJSON ? JSON.parse(sessionUserJSON) : null)

        if (user) {
          this.profissionalLogado = user
          if (!this.form.professionalId) {
            this.form.professionalId = user.id
          }
        } else {
          throw new Error('Nenhum profissional logado encontrado')
        }

      } catch (error) {
        console.error('[EditAgendamentoModal] Erro ao carregar profissional:', error)
        Swal.fire({
          title: '❌ Erro!',
          text: 'Você precisa estar logado. Faça login novamente.',
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
        console.log('[EditAgendamentoModal] Procedimentos carregados:', this.procedimentos)
      } catch (error) {
        console.error('[EditAgendamentoModal] Erro ao carregar procedimentos:', error)
        Swal.fire({
          title: '⚠️ Aviso',
          text: 'Não foi possível carregar os procedimentos.',
          icon: 'warning',
          confirmButtonColor: '#7021D8'
        })
      } finally {
        this.carregandoProcedimentos = false
      }
    },

    // Preencher formulário a partir de um agendamento
    populateFromAgendamento(ag) {
      try {
        this.form.id = ag.id ?? null
        this.form.clientName = ag.clientName || ag.paciente || ''
        this.form.clientId = ag.clientId || 1
        this.form.professionalId = ag.professionalId || this.profissionalLogado?.id || null
        this.form.enterpriseId = ag.enterpriseId || this.enterpriseId
        this.form.schedulingTypeId = ag.schedulingTypeId || null
        this.form.status = ag.status ?? 1

        // Converter ISO para datetime-local
        if (ag.scheduledDate) {
          try {
            const dt = parseISO(ag.scheduledDate)
            this.form.scheduledDate = format(dt, "yyyy-MM-dd'T'HH:mm")
          } catch (e) {
            console.warn('[EditAgendamentoModal] Erro ao parsear data:', e)
            this.form.scheduledDate = ag.scheduledDate
          }
        } else {
          this.form.scheduledDate = ''
        }

        console.log('[EditAgendamentoModal] Formulário preenchido:', this.form)
      } catch (e) {
        console.error('[EditAgendamentoModal] Erro ao popular form:', e)
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
          field: 'Paciente',
          message: 'Nome do paciente deve ter no mínimo 3 caracteres.'
        })
      }

      if (/\d/.test(this.form.clientName)) {
        this.apiErrors.push({
          field: 'Paciente',
          message: 'Nome do paciente não pode conter números.'
        })
      }

      if (!this.form.professionalId || this.form.professionalId <= 0) {
        this.apiErrors.push({
          field: 'Profissional',
          message: 'Profissional não identificado.'
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

    // Converter datetime-local para ISO
    localToISO(local) {
      if (!local) return null
      return local.includes('T') ? `${local}:00Z` : local
    },

    // Salvar edição
    async salvarEdicao() {
      if (!this.validarFormulario()) {
        return
      }

      this.apiErrors = []
      this.isLoading = true

      try {
        const scheduledDateISO = this.localToISO(this.form.scheduledDate)

        const payload = {
          id: this.form.id,
          clientName: this.form.clientName.trim(),
          clientId: this.form.clientId,
          professionalId: this.form.professionalId,
          enterpriseId: this.form.enterpriseId,
          schedulingTypeId: this.form.schedulingTypeId,
          scheduledDate: scheduledDateISO,
          status: this.form.status,
        }

        console.log('[EditAgendamentoModal] Payload para atualização:', payload)

        const response = await schedulingService.atualizarAgendamento(payload)

        console.log('[EditAgendamentoModal] Resposta da atualização:', response)

        this.$emit('salvo', response?.data ?? response)
        this.$emit('fechar')

        Swal.fire({
          title: '✅ Agendamento Atualizado!',
          text: `Agendamento de ${this.form.clientName} foi atualizado com sucesso.`,
          icon: 'success',
          confirmButtonColor: '#7021D8',
          timer: 2000
        })

      } catch (error) {
        console.error('[EditAgendamentoModal] Erro ao salvar:', error)

        const apiErrorData = error.response?.data || error

        if (Array.isArray(apiErrorData)) {
          this.apiErrors = apiErrorData
        } else if (apiErrorData && typeof apiErrorData === 'object' && apiErrorData.message) {
          this.apiErrors = [{
            message: apiErrorData.message,
            field: apiErrorData.field || 'Sistema'
          }]
        } else {
          this.apiErrors = [{
            message: 'Erro inesperado ao atualizar o agendamento.',
            field: 'Sistema'
          }]
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

.label {
  display: block;
  font-weight: 500;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
}

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
