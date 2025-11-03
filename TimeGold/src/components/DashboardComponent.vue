<template>
    <div class="mt-10 mb-10 bg-white-50 min-h-screen space-y-6">

        <!-- Botão de fechar -->
    <button
      @click="$emit('close')"
      class="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
    >
      ✖
    </button>

    <!-- Cabeçalho -->
    <header class="flex justify-between items-center bg-white p-4 rounded-xl shadow mt-10 mb-10">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Olá, Dra. Maisa Amaral 👋</h1>
      </div>
  
      <div class="flex items-center gap-3">
        <p class="text-gray-700 font-semibold">Hoje é {{ dataAtual }}</p>
      </div>
    </header>

    <main>
        <div class="justif-center mt-10 mb-10">
    <!-- Cards de indicadores-->
    <section class="grid grid-cols-1 md:grid-cols-4  gap-4">
      <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z" />
            </svg>
        </div>
        <p class="text-4xl font-extrabold text-gray-800 mb-2">12</p>
        <h4 class="text-lg font-medium text-gray-600">Atendimentos confirmados</h4>
      </div>

      <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        </div>
        <p class="text-4xl font-extrabold text-gray-800 mb-2">8</p>
        <h4 class="text-lg font-medium text-gray-600">Pacientes atendidos</h4>
      </div>

      <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
        </div>
        <div class="flex items-baseline justify-center">
             <p class="text-4xl font-extrabold text-gray-800">3</p>
            </div>
            <h4 class="text-lg font-medium text-gray-600 mt-2">
                Atendimentos pendentes
            </h4>
      </div>

      <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-ban w-8 h-8" viewBox="0 0 16 16">
                <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
            </svg>
        </div>
        <h3 class="text-4xl font-extrabold text-gray-800 mb-2">1</h3>
        <p class="text-lg font-medium text-gray-600">Atendimento cancelado</p>
      </div>
    </section>


    <!-- Agendamentos -->
     <section class="bg-white p-4 rounded-xl shadow mt-10 mb-10">
    <h2 class="text-xl font-bold text-purple-900 mt-3 mb-3">Agendamentos de hoje</h2>

    <div
      ref="tabelaScroll"
      class="overflow-x-auto w-full cursor-grab active:cursor-grabbing select-none"
    >
      <table class="min-w-[700px] w-full text-left border-t border-gray-200">
        <thead>
          <tr class="text-lg text-purple-700">
            <th class="py-2 px-4">Horário</th>
            <th class="px-4">Paciente</th>
            <th class="px-4">Procedimento</th>
            <th class="px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(consulta, index) in agendamentoDoDia"
            :key="index"
            class="border-t text-gray-700 hover:bg-gray-50 mt-5 mb-5"
          >
            <td class="py-3 px-4 whitespace-nowrap">{{ consulta.hora }}</td>
            <td class="py-3 px-4 whitespace-nowrap">{{ consulta.paciente }}</td>
            <td class="py-3 px-4 whitespace-nowrap">{{ consulta.procedimento }}</td>
            <td>
              <span
                class="px-2 py-1 text-sm rounded-full"
                :class="{
                  'bg-green-100 text-green-700 font-bold': consulta.status === 'Concluído',
                  'bg-yellow-100 text-yellow-700 font-bold': consulta.status === 'Em andamento',
                  'bg-red-100 text-red-700 font-bold': consulta.status === 'Pendente'
                }"
              >
                {{ consulta.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Próximos Agendamentos -->
  <div class="bg-white rounded-xl p-4 mt-20 w-full shadow-sm border-t">
    <div class="flex items-center gap-2 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-blue-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M7 10h10v2H7v-2zm0 4h7v2H7v-2zm10-8h-2V3h-2v3H11V3H9v3H7a2 2 0 00-2 2v12a2 
          2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2zm0 14H7V8h10v12z"
        />
      </svg>
      <h3 class="text-lg font-bold text-purple-800">Próximos agendamentos</h3>
    </div>
    <ul class="divide-y divide-gray-200 max-h-56">
      <li
        v-for="(pac, i) in proximosPacientes"
        :key="i"
        class="py-2 hover:bg-gray-50 rounded-lg px-2 transition"
      >
        <p class="text-md text-gray-700 font-semibold">{{ pac.nome }}</p>
        <p class="text-xs text-gray-500">
          {{ pac.data }} — {{ pac.hora }} — {{ pac.procedimento }}
        </p>
      </li>
    </ul>
  </div>
  </section>

   </div>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Data formatada
const dataAtual = new Date().toLocaleDateString('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric'
})

// Dados das consultas
const agendamentoDoDia = ref([
  { hora: '10:00', paciente: 'Tom Holland', procedimento: 'Limpeza', status: 'Concluído' },
  { hora: '10:30', paciente: 'João Almeida ', procedimento: 'Restauração', status: 'Em andamento' },
  { hora: '11:30', paciente: 'Yuri Alberto', procedimento: 'Avaliação', status: 'Pendente' },
  { hora: '11:30', paciente: 'Maria Silva', procedimento: 'Manutenção', status: 'Pendente' }
])

const tabelaScroll = ref(null)

const proximosPacientes = ref([
  { nome: 'Laura Mendes', data:'03/11/2025', hora: '12:00', procedimento: 'Avaliação ortodôntica' },
  { nome: 'Bruno Lima', data:'03/11/2025', hora: '12:30', procedimento: 'Limpeza dental' },
  { nome: 'Ana Souza', data:'03/11/2025', hora: '13:00', procedimento: 'Restauração' },
  { nome: 'Carlos Ribeiro', data:'03/11/2025', hora: '14:00', procedimento: 'Extração simples' }
])

onMounted(() => {
  const el = tabelaScroll.value
  if (!el) return

  let isDown = false
  let startX
  let scrollLeft

  el.addEventListener('mousedown', (e) => {
    isDown = true
    el.classList.add('active')
    startX = e.pageX - el.offsetLeft
    scrollLeft = el.scrollLeft
  })

  el.addEventListener('mouseleave', () => {
    isDown = false
    el.classList.remove('active')
  })

  el.addEventListener('mouseup', () => {
    isDown = false
    el.classList.remove('active')
  })

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 1.2
    el.scrollLeft = scrollLeft - walk
  })
})
onBeforeUnmount(() => {
  const el = tabelaScroll.value
  if (el) el.replaceWith(el.cloneNode(true))
})
</script>