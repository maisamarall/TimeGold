<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
        <button @click="close" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl">✕</button>

        <h3 class="text-xl font-semibold text-gray-800 mb-6">📋 Detalhes do Agendamento</h3>

        <div v-if="agendamento" class="space-y-2 text-gray-700">
          <div class="border-b pb-3">
            <span class="font-semibold text-gray-800">👤 Paciente:</span>
            <div class="text-gray-600">{{ agendamento.clientName || agendamento.paciente}}</div>
          </div>

          <!-- <div class="border-b pb-3">
            <span class="font-semibold text-gray-800">🏥 Procedimento:</span>
            <div class="text-gray-600">
              {{ procedimento }}
              <span v-if="carregandoProcedimento" class="text-xs text-gray-400 ml-2">(carregando...)</span>
            </div>
        </div>

        <div class="border-b pb-3">
          <span class="font-semibold text-gray-800">💲 Valor:</span>
          <div class="text-gray-600 font-bold">
            {{ formattedPrice }}
          </div>
        </div> -->

        <div class="grid grid-cols-2 gap-4 border-b pb-3">
          <div>
            <span class="font-semibold text-gray-800">📅 Data:</span>
            <div class="text-gray-600">{{ formattedDate }}</div>
          </div>
          <div>
            <span class="font-semibold text-gray-800">🕐 Horário:</span>
            <div class="text-gray-600">{{ formattedTime }}</div>
          </div>
        </div>

        <div>
          <span class="font-semibold text-gray-800">📊 Status:</span>
          <div :class="statusTextClasses" class="mt-1">{{ formattedStatus }}</div>
        </div>

      </div>

      <div v-else class="text-center text-gray-500 py-6">
        Nenhum agendamento selecionado.
      </div>

      <div class="mt-8 flex justify-end gap-3">
        <button @click="close" class="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition">
          Fechar
        </button>
        <button @click="onEditar" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
          ✏️ Editar
        </button>
        <button @click="onExcluir" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          🗑️ Excluir
        </button>
      </div>
    </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref, watch } from 'vue'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { schedulingTypeService } from '@/services/schedulingTypeService'

const props = defineProps({
  show: Boolean,
  agendamento: Object
})

const emits = defineEmits(['close', 'editar', 'excluir'])

const procedimentoApi = ref(null)
const carregandoProcedimento = ref(false)

// Carrega procedimento pela API usando o schedulingTypeId
async function loadProcedimento(typeId) {
  procedimentoApi.value = null
  carregandoProcedimento.value = true

  if (!typeId) {
    carregandoProcedimento.value = false
    return
  }

  try {
    console.log('[DetalhesAgendamentoModal] Carregando procedimento ID:', typeId)
    const res = await schedulingTypeService.buscarTipoAgendamentoPorId(typeId)
    const tipoData = res?.data ?? res

    if (tipoData) {
      procedimentoApi.value = tipoData
      console.log('[DetalhesAgendamentoModal] Procedimento carregado:', tipoData)
    }
  } catch (e) {
    console.error('[DetalhesAgendamentoModal] Erro ao carregar procedimento:', e)
    procedimentoApi.value = null
  } finally {
    carregandoProcedimento.value = false
  }
}

// Observa mudanças no agendamento e carrega procedimento
watch(
  () => props.agendamento?.schedulingTypeId,
  (newTypeId) => {
    if (newTypeId) {
      loadProcedimento(newTypeId)
    } else {
      procedimentoApi.value = null
    }
  },
  { immediate: true }
)

const formattedDate = computed(() => {
  if (!props.agendamento?.scheduledDate) return 'N/A'
  try {
    const dt = parseISO(props.agendamento.scheduledDate)
    return format(dt, 'dd/MM/yyyy', { locale: ptBR })
  } catch (e) {
    console.error('[DetalhesAgendamentoModal] Erro ao formatar data:', e)
    return props.agendamento.scheduledDate
  }
})

const formattedTime = computed(() => {
  if (!props.agendamento?.scheduledDate) return 'N/A'
  try {
    const dt = parseISO(props.agendamento.scheduledDate)
    return format(dt, 'HH:mm', { locale: ptBR })
  } catch (e) {
    console.error('[DetalhesAgendamentoModal] Erro ao formatar hora:', e)
    return 'N/A'
  }
})

// Prioridade: API → schedulingTypeName → procedimento → N/A
const procedimento = computed(() => {
  const nome = procedimentoApi.value?.name ||
    procedimentoApi.value?.description ||
    props.agendamento?.schedulingTypeName ||
    props.agendamento?.procedimento ||
    'N/A'
  return nome
})

const formattedStatus = computed(() => {
  const status = props.agendamento?.status
  switch (status) {
    case 1: return '✅ Pendente'
    case 2: return '⏳ Em andamento'
    case 3: return '✔️ Concluído'
    case 4: return '❌ Cancelado'
    default: return 'Desconhecido'
  }
})

const statusTextClasses = computed(() => {
  const status = props.agendamento?.status
  switch (status) {
    case 1: return 'text-blue-600 font-semibold'
    case 2: return 'text-yellow-600 font-semibold'
    case 3: return 'text-green-600 font-semibold'
    case 4: return 'text-red-600 font-semibold'
    default: return 'text-gray-700'
  }
})

function close() {
  emits('close')
}

function onEditar() {
  emits('editar', props.agendamento)
  close()
}

function onExcluir() {
  emits('excluir', props.agendamento)
  close()
}
</script>

<style scoped>
/* Animação ao abrir */
.fixed {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>