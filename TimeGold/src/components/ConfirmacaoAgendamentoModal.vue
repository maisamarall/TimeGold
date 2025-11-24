<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
    <transition name="fade-scale">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative animate-fade-in">

        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-purple-800 mb-2">Confirme para realizar o agendamento</h2>
          <hr class="mb-4">
          
          <div class="text-left space-y-2 text-gray-700">
            <p><strong>Paciente:</strong> {{ paciente }}</p>
            <p><strong>Data:</strong> {{ formattedData }}</p>
            <p><strong>Horário Selecionado:</strong> {{ horario }}</p>
            <p><strong>Procedimento:</strong> {{ procedimento }}</p>
          </div>
        </div>

        <div class="flex justify-center gap-4">
          <button @click="confirmar"
            class="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md">
            Confirmar
          </button>
          
          <button @click="close"
            class="px-8 py-3 text-purple-600 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition duration-150">
            Cancelar
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  show: Boolean,
  paciente: String,
  procedimento: String,
  data: String,         
  horario: String
})
const emits = defineEmits(['fechar', 'confirmar']) 

const formattedData = computed(() => {
  return props.data
})

function close() {
  emits('fechar')
}

function confirmar() {
  emits('confirmar')
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