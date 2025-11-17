<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
    <transition name="fade-scale">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative animate-fade-in">

        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-purple-800 mb-2">Confirme para realizar o agendamento</h2>
          <hr class="mb-4">
          
          <div class="text-left space-y-2 text-gray-700">
            <p><strong>Paciente:</strong> {{ paciente }}</p>
            <p><strong>Data Selecionada:</strong> {{ data }}</p>
            <p><strong>Horário Selecionado:</strong> {{ horario }}</p>
            <p><strong>Procedimento:</strong> {{ procedimento }}</p>
          </div>
        </div>

        <div class="flex justify-center gap-4">
          <button @click="$emit('confirmar')"
            class="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md">
            Confirmar
          </button>
          
          <button @click="$emit('fechar')"
            class="px-8 py-3 text-purple-600 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 transition duration-150">
            Cancelar
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ConfirmacaoAgendamentoModal',
  props: {
    paciente: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    horario: {
      type: String,
      required: true
    },
    procedimento: {
      type: String,
      required: true
    }
  }
}
</script>