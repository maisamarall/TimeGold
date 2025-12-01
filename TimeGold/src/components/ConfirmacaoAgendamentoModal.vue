<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
    <transition name="fade-scale">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative animate-fade-in">

        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-purple-800 mb-2">✅ Confirme o Agendamento</h2>
          <hr class="mb-4">

          <div class="text-left space-y-3 text-gray-700 bg-purple-50 p-4 rounded-lg">
            <p><strong>👤 Paciente:</strong> {{ agendamento?.clientName || agendamento?.paciente }}</p>
            <p><strong>📅 Data:</strong> {{ agendamento?.data }}</p>
            <p><strong>🕐 Horário:</strong> {{ agendamento?.horario }}</p>
            <!-- <p><strong>🏥 Procedimento:</strong> {{ agendamento?.procedimento }}</p>

            <p><strong>💲 Valor:</strong> {{ formatarMoeda(agendamento?.price) }}</p> -->
          </div>
        </div>

        <div class="flex justify-center gap-4">
          <button @click="confirmar"
            class="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md">
            ✓ Confirmar
          </button>

          <button @click="close"
            class="px-8 py-3 text-purple-600 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition duration-150">
            ✕ Cancelar
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean,
  agendamento: Object, 
})

const emits = defineEmits(['fechar', 'confirmar'])

function formatarMoeda(valor) {
  const v = valor || 0;
  return new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }).format(v);
}

function close() {
  emits('fechar')
}

function confirmar() {
  emits('confirmar', props.agendamento)
}
</script>

<style scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
    transition: all 0.3s ease;
}
.fade-scale-enter-from, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>