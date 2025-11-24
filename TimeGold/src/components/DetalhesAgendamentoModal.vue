<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="relative bg-white rounded-lg p-6 max-w-md w-full">
        <button @click="close" class="absolute px-4 py-2 top-2 right-4 text-gray-500 border-2 border-gray-500 hover:bg-gray-100">X</button>

        <h2 class="text-xl font-semibold mb-4 text-purple-900">Detalhes do Agendamento</h2>
        <hr class="mb-4">

        <div v-if="agendamento" class="space-y-2">
          <p><strong>Paciente:</strong> {{ agendamento.paciente }}</p>
          <p><strong>Procedimento:</strong> {{ agendamento.procedimento }}</p>
          <p><strong>Data:</strong> {{ formattedDate }}</p> 
          <p><strong>Horário:</strong> {{ agendamento.hora }}</p>
          <p><strong>Status:</strong> <span :class="statusTextClasses">{{ formattedStatus }}</span></p>
        </div>

        <div class="flex justify-center gap-4 mt-10">
          <button @click="onEditar" class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-150">
            Editar
          </button>
          <button @click="onExcluir" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150">
            Excluir
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale';

const props = defineProps({
  show: Boolean,
  agendamento: Object
})
const emits = defineEmits(['close', 'editar', 'excluir'])

const formattedDate = computed(() => {
    if (!props.agendamento || !props.agendamento.scheduledDate) return 'N/A'
    
    return format(parseISO(props.agendamento.scheduledDate), 'dd/MM/yyyy', { locale: ptBR })
})

// Propriedade computada para converter status numérico para texto
const formattedStatus = computed(() => {
    switch (props.agendamento?.status) {
        case 1: return 'Pendente';
        case 2: return 'Em andamento';
        case 3: return 'Concluído';
        case 4: return 'Cancelado';
        default: return 'Desconhecido';
    }
})

// Propriedade computada para aplicar classes de cor ao status
const statusTextClasses = computed(() => {
    switch (props.agendamento?.status) {
        case 1: return 'text-blue-700 font-semibold';
        case 2: return 'text-yellow-700 font-semibold';
        case 3: return 'text-green-700 font-semibold';
        case 4: return 'text-red-700 font-semibold';
        default: return 'text-gray-700';
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
}
</script>