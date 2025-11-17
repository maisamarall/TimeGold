<template>
  <section class="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-200">

      <a href="profissional" class="text-purple-800 hover:text-purple-600 flex items-center gap-2 mb-6 text-sm sm:text-base">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </a>

      <div class="text-center mb-8 sm:mb-10">
        <h1 class="text-2xl sm:text-3xl font-bold text-purple-800">
          Calendário de Agendamentos
        </h1>
      </div>

      <section class="lg:flex lg:h-full lg:flex-col">
        <header class="bg-purple-100 border border-purple-300 px-4 py-4 rounded-lg">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full">

            <div class="data relative w-full lg:w-1/3 border border-purple-500 rounded-lg font-semibold text-purple-900 sm:justify-start md:justify-start lg:justify-start">
              <input
                type="date"
                v-model="selectedDateInput"
                @change="onDateChange"
                class="bg-gray-50 border border-purple-300 rounded-lg text-purple-900 text-md font-semibold focus:ring-purple-500 focus:border-purple-500 w-full ps-10 p-2.5"
              />
            </div>

            <div class="flex justify-center sm:justify-start md:justify-center lg:justify-center items-center gap-2 w-full lg:w-1/3">
              <select
                id="visao"
                v-model="viewMode"
                @change="onViewModeChange"
                class="bg-white border border-purple-500 text-gray-900 text-md rounded-lg focus:ring-purple-900 focus:border-purple-900 p-2.5 w-full sm:w-auto"
              >
                <option value="day">Dia</option>
                <option value="week">Semana</option>
                <option value="month">Mês</option>
              </select>
            </div>

            <div class="flex justify-end sm:justify-center lg:justify-end items-center gap-2 w-full lg:w-1/3 mr-4">
              <button @click="abrirModal"
              class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-150 flex items-center space-x-2">
              <span>Cadastrar agendamento</span>
              </button>
            </div>

          </div>
        </header>

        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col mt-4">

          <div v-if="viewMode === 'month'" class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700">
            <div v-for="(d,i) in weekDays" :key="i" class="flex justify-center bg-white py-2">{{ d }}</div>
          </div>
          
          <div v-else-if="viewMode === 'week'" class="grid grid-cols-8 border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700">
            <div class="flex justify-center bg-white py-2">Hora</div> <div v-for="(day, index) in weekDaysForGrid" :key="index"
                 class="flex justify-center bg-white py-2"
                 :class="{'bg-purple-50 text-purple-700 font-bold': isSameDay(day, new Date())}">
                {{ format(day, 'EEE', { locale: ptBR }) }} ({{ format(day, 'dd/MM') }})
            </div>
          </div>

          <div v-if="viewMode === 'month'" class="grid grid-cols-7">
            <div
              v-for="cell in calendarCells"
              :key="cell.key"
              class="p-3 h-28 border-r border-b border-gray-200 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100"
            >
              <span
                :class="cell.isCurrentMonth ? 'text-gray-900' : 'text-gray-500'"
                class="text-xs font-semibold flex items-center justify-center w-7 h-7 rounded-full"
              >
                {{ cell.day || '' }}
              </span>
              <div v-if="cell.agendamentos && cell.agendamentos.length > 0" class="mt-2 text-xs text-gray-500">
                <div v-for="agendamento in cell.agendamentos" :key="agendamento.id">
                  {{ agendamento.procedimento }}
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="viewMode === 'day'" class="p-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Agendamentos para {{ formattedSelectedDate }}</h2>
              <div v-if="dailyAgendamentos.length > 0" class="space-y-4">
                <div v-for="agendamento in dailyAgendamentos" :key="agendamento.id" class="p-3 border border-gray-300 rounded-lg">
                  <h3 class="font-semibold text-purple-800">{{ agendamento.procedimento }} - {{ agendamento.paciente }}</h3>
                  <p class="text-sm text-gray-600">Horário: {{ agendamento.hora }} | Status: {{ agendamento.status }}</p>
                </div>
              </div>
              <div v-else class="text-gray-500">Nenhum agendamento para este dia.</div>
            </div>
          </div>

          <div v-else-if="viewMode === 'week'" class="relative w-full overflow-x-auto">
              <div class="grid grid-cols-8 w-full border-t border-gray-200">
                
                <template v-for="(hour, hIndex) in WEEK_HOURS" :key="hIndex">
                  <div class="h-28 p-2 border-r border-gray-200 flex items-start justify-end pr-4 transition-all hover:bg-stone-50">
                      <span class="text-xs font-semibold text-gray-500">{{ hour }}</span>
                  </div>

                  <div v-for="(day, dIndex) in weekDaysForGrid" :key="dIndex"
                       class="h-28 p-1.5 border-t border-r border-gray-200 transition-all hover:bg-stone-50 relative">
                    
                    <template v-for="agendamento in weeklyAgendamentos" :key="agendamento.id">
                      <div v-if="isSameDay(parseISO(agendamento.date), day) && agendamento.hora.substring(0, 2) === hour.substring(0, 2)"
                           class="rounded p-1.5 border-l-2 border-purple-600 bg-purple-50 overflow-hidden cursor-pointer absolute inset-1"
                           title="Detalhes do agendamento">
                        <p class="text-xs font-normal text-gray-900 mb-px truncate">{{ agendamento.procedimento }}</p>
                        <p class="text-xs font-semibold text-purple-600">{{ agendamento.hora }}</p>
                      </div>
                    </template>

                  </div>
                </template>
                
                <div class="h-28 p-2 border-t border-r border-gray-200 flex items-start justify-end pr-4 transition-all hover:bg-stone-50">
                    <span class="text-xs font-semibold text-gray-500">21:00</span>
                </div>
                <div v-for="i in 7" :key="'last-row-'+i" class="h-28 p-1.5 border-t border-r border-gray-200 transition-all hover:bg-stone-50"></div>
                
              </div>
              <div v-if="weeklyAgendamentos.length === 0" class="text-center text-gray-500 p-8">
                Nenhum agendamento para esta semana.
              </div>
          </div>
        </div>

        <AgendamentoFormModal v-if="mostrarModal" @fechar="fecharModal" @salvar="salvarAgendamento" />

        <ConfirmacaoAgendamentoModal
          v-if="mostrarModalConfirmacao"
          :paciente="agendamentoParaConfirmar?.paciente"
          :data="agendamentoParaConfirmar?.data"
          :horario="agendamentoParaConfirmar?.hora"
          :procedimento="agendamentoParaConfirmar?.procedimento"
          @fechar="mostrarModalConfirmacao = false"
          @confirmar="confirmarAgendamento"
        />
      </section>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AgendamentoFormModal from './AgendamentoFormModal.vue'
import ConfirmacaoAgendamentoModal from './ConfirmacaoAgendamentoModal.vue'
// Importações de data-fns: parseISO foi adicionado para converter strings de data
import { format, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO } from 'date-fns' 
import { ptBR } from 'date-fns/locale'; // Para formatação correta em português
import Swal from 'sweetalert2'

// Estado do componente
const selectedDate = ref(new Date()) // Objeto Date principal
const selectedDateInput = ref(format(selectedDate.value, 'yyyy-MM-dd')) // String para o input[type="date"]
const viewMode = ref('month') // 'day', 'week', 'month'
const mostrarModal = ref(false)
const mostrarModalConfirmacao = ref(false)
const agendamentoParaConfirmar = ref(null)
const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui','Sex', 'Sáb']

// Dados Fictícios de Agendamentos (Para teste)
// **Nota**: O campo 'date' deve conter a data em formato 'YYYY-MM-DD' para uso com parseISO.
const agendamentos = ref([
    { id: 1, paciente: 'João Silva', data: '2025-11-17', hora: '10:00', procedimento: 'Limpeza Dental', status: 'Concluído', date: '2025-11-17' },
    { id: 2, paciente: 'Maria Souza', data: '2025-11-17', hora: '14:30', procedimento: 'Consulta Ortopédica', status: 'Pendente', date: '2025-11-17' },
    { id: 3, paciente: 'Pedro Lima', data: '2025-11-20', hora: '08:00', procedimento: 'Ressonância Magnética', status: 'Em andamento', date: '2025-11-20' },
    { id: 4, paciente: 'Ana Costa', data: '2025-11-21', hora: '16:00', procedimento: 'Teste de Visão', status: 'Agendado', date: '2025-11-21' },
]);

// Horários Fixos para a Grade de Semana (07:00h às 20:00h)
const WEEK_HOURS = []
for (let h = 7; h <= 20; h++) { 
  WEEK_HOURS.push(`${h.toString().padStart(2, '0')}:00`)
}

// Computed properties

// Novo: Dias da Semana (Date Objects) para a Grade
const weekDaysForGrid = computed(() => {
  // Obtém o início da semana (Domingo por padrão no date-fns, mas ajustado com locale para Segunda-feira se necessário)
  const start = startOfWeek(selectedDate.value, { locale: ptBR })
  const days = []
  for (let i = 0; i < 7; i++) {
    // Adiciona 7 dias
    days.push(addDays(start, i))
  }
  return days
})

const formattedSelectedDate = computed(() => format(selectedDate.value, 'dd/MM/yyyy'))
// ... (formattedWeekRange - mantido do código anterior, opcional para a grade)

const calendarCells = computed(() => {
  const firstDayOfMonth = new Date(selectedDate.value.getFullYear(), selectedDate.value.getMonth(), 1);
  const start = startOfWeek(firstDayOfMonth, { locale: ptBR });
  const lastDayOfMonth = new Date(selectedDate.value.getFullYear(), selectedDate.value.getMonth() + 1, 0);
  const end = endOfWeek(lastDayOfMonth, { locale: ptBR });

  const cells = []
  let date = start
  
  while (date <= end) {
    const isCurrentMonth = isSameMonth(date, selectedDate.value)
    const day = isCurrentMonth ? date.getDate() : null
    
    // Usando parseISO para garantir que a comparação com 'a.data' (string) funcione
    const cellAgendamentos = agendamentos.value.filter(a => isSameDay(parseISO(a.data), date))

    cells.push({ key: date.toISOString(), day, isCurrentMonth, agendamentos: cellAgendamentos })
    date = addDays(date, 1)
  }
  return cells
})

const dailyAgendamentos = computed(() => {
  return agendamentos.value.filter(a => isSameDay(parseISO(a.data), selectedDate.value))
})

const weeklyAgendamentos = computed(() => {
  const start = startOfWeek(selectedDate.value, { locale: ptBR })
  const end = endOfWeek(selectedDate.value, { locale: ptBR })
  
  return agendamentos.value.filter(a => {
    const agendamentoDate = parseISO(a.data)
    // Filtra agendamentos dentro da semana (inclusive o dia inicial e final)
    return agendamentoDate >= start && agendamentoDate <= end
  })
})

// Métodos
function onDateChange(event) {
  selectedDate.value = new Date(event.target.value)
}

function onViewModeChange(event) {
  viewMode.value = event.target.value
}
function abrirModal() {
  mostrarModal.value = true
}
function fecharModal() {
  mostrarModal.value = false
}

function salvarAgendamento(novoAgendamento) {
  // O campo 'date' é necessário para a lógica de filtro.
  novoAgendamento.date = novoAgendamento.data 
  agendamentoParaConfirmar.value = novoAgendamento
  mostrarModal.value = false
  mostrarModalConfirmacao.value = true
}

function confirmarAgendamento() {
  const newId = agendamentos.value.length > 0 ? Math.max(...agendamentos.value.map(a => a.id)) + 1 : 1
  agendamentos.value.push({ ...agendamentoParaConfirmar.value, id: newId })
  
  mostrarModalConfirmacao.value = false
  agendamentoParaConfirmar.value = null
  
  Swal.fire({
    title: '✅ Sucesso!',
    text: 'Agendamento confirmado com sucesso!',
    icon: 'success',
    confirmButtonColor: '#7021D8'
  })
}
</script>