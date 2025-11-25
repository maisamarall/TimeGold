<template>
  <section class="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-200">

      <a href="profissional" class="text-purple-800 hover:text-purple-600 flex items-center gap-2 mb-6 text-sm sm:text-base">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </a>

      <section class="lg:flex lg:h-full lg:flex-col">
        <header class="bg-purple-100 border border-purple-300 px-4 py-4 rounded-lg">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">

            <div class="w-full sm:w-1/3">
              <select
                id="visao"
                v-model="viewMode"
                @change="onViewModeChange"
                class="bg-white border border-purple-500 text-gray-900 text-md py-2 px-4 rounded-lg focus:ring-purple-900 focus:border-purple-900 p-5 w-full sm:w-auto"
              >
                <option value="day">Dia</option>
                <option value="week">Semana</option>
                <option value="month">Mês</option>
              </select>
            </div>

            <div class="w-full sm:w-1/3 text-center">
              <h1 class="text-lg font-[30px] sm:text-md font-bold text-purple-800">
                Calendário de Agendamentos
              </h1>
            </div>
          
            <div class="w-full sm:w-1/3 flex justify-end sm:justify-end">
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

          <div v-if="viewMode === 'month'" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px">
            <div
              v-for="cell in calendarCells"
              :key="cell.key"
              class="p-3 h-28 border-r border-b border-gray-200 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100"
            >
              <span
              :class="{
                'text-white bg-purple-500': isToday(cell.date),
                'text-gray-900': cell.isCurrentMonth && !isToday(cell.date),
                'text-gray-500': !cell.isCurrentMonth
              }"
              class="text-xs font-semibold flex items-center justify-center w-7 h-7 rounded-full"
              >
              {{ cell.day || '' }}
            </span>
              <div
              v-if="cell.agendamentos && cell.agendamentos.length > 0"
              class="mt-2 text-xs max-h-20 overflow-y-auto space-y-1"
              >
              <div
              v-for="agendamento in cell.agendamentos"
              :key="agendamento.id"
              class="min-w-0 p-1 rounded-md cursor-pointer"
              :class="getStatusClasses(agendamento.status)"
              @click="abrirDetalhes(agendamento)"
              >
              <h3 class="font-bold text-sm text-gray-700 truncate">{{ agendamento.paciente }}</h3>
              <h3 class="font-semibold text-sm text-gray-700 truncate">{{ agendamento.procedimento }}</h3>
              <p class="text-xs font-medium text-gray-700">{{ agendamento.hora }}</p> </div>
          </div>
            </div>
          </div>

          <div v-else-if="viewMode === 'day'" class="p-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <h2 class="text-lg font-semibold text-gray-700 mb-4">Agendamentos para {{ formattedSelectedDate }}</h2>
              <div v-if="dailyAgendamentos.length > 0" class="space-y-4">
                <div v-for="agendamento in dailyAgendamentos" :key="agendamento.id" class="p-3 border border-gray-300 rounded-lg cursor-pointer" :class="getStatusClasses(agendamento.status)" @click="abrirDetalhes(agendamento)">
                  <h3 class="font-semibold text-gray-900">{{ agendamento.paciente }} - {{ agendamento.procedimento }}</h3>
                  <p class="text-sm font-semibold text-gray-700">Horário: {{ agendamento.hora }} | Status: {{ agendamento.status }}</p> </div>
              </div>
              <div v-else class="text-gray-500">Nenhum agendamento para este dia.</div>
            </div>
          </div>

          <div v-else-if="viewMode === 'week'" class="relative w-full overflow-x-auto">
              <div class="grid grid-cols-8 w-full border-t border-gray-200">
                
                <template v-for="(hour, hIndex) in WEEK_HOURS" :key="hIndex">
                  <div class="h-28 p-2 border-r border-gray-200 flex items-start justify-center pr-4 transition-all hover:bg-stone-50">
                      <span class="text-xs font-semibold text-gray-500">{{ hour }}</span>
                  </div>

                  <div v-for="(day, dIndex) in weekDaysForGrid" :key="dIndex"
                        class="h-28 p-1.5 border-t border-r border-gray-200 transition-all hover:bg-stone-50 relative">
                    
                    <template v-for="agendamento in weeklyAgendamentos" :key="agendamento.id">
                      <div v-if="isSameDay(parseISO(agendamento.scheduledDate), day) && agendamento.hora.substring(0, 2) === hour.substring(0, 2)"
                            class="rounded p-1.5 overflow-hidden cursor-pointer absolute inset-1"
                            :class="getStatusClasses(agendamento.status)"
                            @click="abrirDetalhes(agendamento)"
                            title="Detalhes do agendamento">
                          <p class="text-md font-bold text-gray-900 mb-px truncate">{{ agendamento.paciente }}</p>
                          <p class="text-xs font-semibold text-gray-900 mb-px truncate">{{ agendamento.procedimento }}</p>
                          <p class="text-xs font-medium text-gray-700">{{ agendamento.hora }}</p> <p class="text-xs font-medium text-gray-700">{{ agendamento.status }}</p>
                      </div>
                    </template>

                  </div>
                </template>
                
              </div>
              <div v-if="weeklyAgendamentos.length === 0" class="text-center text-gray-500 p-8">
                Nenhum agendamento para esta semana.
              </div>
          </div>
        </div>

        <AgendamentoFormModal 
        v-if="mostrarModal" 
        @fechar="fecharModal" 
        @salvar-agendamento="salvarAgendamento" />

        <ConfirmacaoAgendamentoModal
          v-if="mostrarModalConfirmacao"
          :paciente="agendamentoParaConfirmar?.paciente"
          :data="agendamentoParaConfirmar?.data"
          :horario="agendamentoParaConfirmar?.hora"
          :procedimento="agendamentoParaConfirmar?.procedimento"
          @fechar="mostrarModalConfirmacao = false"
          @confirmar="confirmarAgendamento"
        />

        <DetalhesAgendamentoModal
        :show="mostrarDetalhesModal"
        :agendamento="agendamentoSelecionado"
        @close="fecharDetalhes"
        @editar="editarAgendamento"
        @excluir="excluirAgendamento"
        />

        <EditAgendamentoModalComponent
            v-if="mostrarEditarModal"
            :agendamento="agendamentoSelecionado"
            @fechar="mostrarEditarModal = false"
            @salvo="handleAgendamentoSalvo" 
        />

        <SchedulingTypeFormModal
        v-if="mostrarModalCadastroProcedimento"
        :enterpriseId="ID_DA_EMPRESA_AQUI"
        @fechar="mostrarModalCadastroProcedimento = false"
        @salvo="handleProcedimentoSalvo"
        />
      </section>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AgendamentoFormModal from './AgendamentoFormModal.vue'
import ConfirmacaoAgendamentoModal from './ConfirmacaoAgendamentoModal.vue'
import DetalhesAgendamentoModal from './DetalhesAgendamentoModal.vue'
import EditAgendamentoModalComponent from './EditAgendamentoModalComponent.vue'
import SchedulingTypeFormModal from '@/components/SchedulingTypeFormModal.vue';
import { format, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO } from 'date-fns' 
import { ptBR } from 'date-fns/locale';
import Swal from 'sweetalert2'
import { schedulingService } from '../services/schedulingService';

// Estado do componente
const selectedDate = ref(new Date())
const viewMode = ref('month') // 'day', 'week', 'month'
const mostrarModal = ref(false)
const mostrarModalConfirmacao = ref(false)
const agendamentoParaConfirmar = ref(null)
const mostrarModalCadastroProcedimento = ref(false);
const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui','Sex', 'Sáb']

const agendamentos = ref([

    { id: 1, paciente: 'João Silva', scheduledDate: '2025-11-17T14:00:00Z', procedimento: 'Limpeza Dental', status: 3 },

    { id: 2, paciente: 'Maria Souza', scheduledDate: '2025-11-17T14:30:00Z', procedimento: 'Consulta Odontológica', status: 3 },

    { id: 3, paciente: 'Pedro Lima', scheduledDate: '2025-11-20T05:00:00Z', procedimento: 'Manutenção', status: 3 },

]);

const WEEK_HOURS = []
for (let h = 7; h <= 17; h++) { 
  WEEK_HOURS.push(`${h.toString().padStart(2, '0')}:00`)
}

// Computed properties
const weekDaysForGrid = computed(() => {
  const start = startOfWeek(selectedDate.value, { locale: ptBR })
  const days = []
  for (let i = 0; i < 7; i++) {
    days.push(addDays(start, i))
  }
  return days
})
const formattedSelectedDate = computed(() => format(selectedDate.value, 'dd/MM/yyyy'))

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
    
    const cellAgendamentos = agendamentos.value
      .filter(a => isSameDay(parseISO(a.scheduledDate), date))
      .map(a => ({
          ...a,
          hora: format(parseISO(a.scheduledDate), 'HH:mm', { locale: ptBR }),
      }));

    cells.push({ 
      key: date.toISOString(), 
      date: date, 
      day, 
      isCurrentMonth, 
      agendamentos: cellAgendamentos
      })
    date = addDays(date, 1)
  }
  return cells
})

const dailyAgendamentos = computed(() => {
  return agendamentos.value
    .filter(a => isSameDay(parseISO(a.scheduledDate), selectedDate.value))
    .map(a => ({
        ...a,
        hora: format(parseISO(a.scheduledDate), 'HH:mm', { locale: ptBR }),
    }));
})

const weeklyAgendamentos = computed(() => {
  const start = startOfWeek(selectedDate.value, { locale: ptBR });
  const end = endOfWeek(selectedDate.value, { locale: ptBR });
  return agendamentos.value.filter(a => {
    const d = parseISO(a.scheduledDate);
    a.hora = format(d, 'HH:mm', { locale: ptBR });
    return d >= start && d <= end;
  });
});

// Status
const getStatusClasses = (status) => {
  switch (status) {
    case 1: // Pendente
      return 'bg-blue-200 border-2 border-blue-500';
    case 2: // Em andamento
      return 'bg-yellow-200 border-2 border-yellow-500';
    case 3: // Concluído
      return 'bg-green-200 border-2 border-green-500';
    case 4: // Cancelado
      return 'bg-red-200 border-2 border-red-500';
    default:
      return 'bg-gray-200';
  }
};

// Modal de Detalhes de Agendamento
const agendamentoSelecionado = ref(null);
const mostrarDetalhesModal = ref(false);
const mostrarEditarModal = ref(false);

// Métodos
function onViewModeChange(event) {
  viewMode.value = event.target.value
}
function abrirModal() {
  mostrarModal.value = true
}
function fecharModal() {
  mostrarModal.value = false
}

function handleAgendamentoSalvo() {
    mostrarModal.value = false;
    mostrarEditarModal.value = false;
    mostrarModalConfirmacao.value = false;
    
    Swal.fire({
      title: '✅ Sucesso!',
      text: 'Agendamento salvo com sucesso!',
      icon: 'success',
      confirmButtonColor: '#7021D8'
    })
}

function salvarAgendamento(novoAgendamento) {
  
  const dataHora = parseISO(novoAgendamento.scheduledDate);
  
  agendamentoParaConfirmar.value = {
    ...novoAgendamento, 
    
    data: format(dataHora, 'dd/MM/yyyy'),
    hora: format(dataHora, 'HH:mm'),
    
  }
  
  mostrarModal.value = false
  mostrarModalConfirmacao.value = true
}

async function confirmarAgendamento() {
  const agendamento = agendamentoParaConfirmar.value;
  
  const scheduledDateISO = agendamento.scheduledDate; 
  
  const payload = {
    paciente: agendamento.paciente,
    professionalId: agendamento.professionalId,
    enterpriseId: agendamento.enterpriseId,
    schedulingTypeId: agendamento.schedulingTypeId,
    scheduledDate: scheduledDateISO, 
    status: 1
  };
    
  try {
      
      const newId = agendamentos.value.length > 0 ? Math.max(...agendamentos.value.map(a => a.id)) + 1 : 1
      
      agendamentos.value.push({ 
          ...agendamento, 
          id: newId, 
          status: 1, 
          scheduledDate: scheduledDateISO, 
      });

      agendamentoParaConfirmar.value = null;
      
      handleAgendamentoSalvo(); 
      
  } catch(error) {
      const errorData = error.response?.data || error;
      const errorMessage = Array.isArray(errorData) && errorData.every(e => e.message)
          ? errorData.map(e => `**${e.field || 'Erro'}**: ${e.message}`).join('<br>')
          : 'Erro inesperado ao confirmar o agendamento.';
          
      Swal.fire({
          title: '❌ Erro na Confirmação!',
          html: errorMessage,
          icon: 'error',
          confirmButtonColor: '#D33'
      });
      console.error("Erro na confirmação do agendamento:", error);
      
      mostrarModalConfirmacao.value = false; 
      agendamentoParaConfirmar.value = null;
  }
}

function handleProcedimentoSalvo() {
    Swal.fire({
        title: '✅ Sucesso!',
        text: 'Procedimento cadastrado com sucesso e já está disponível para agendamento!',
        icon: 'success',
        confirmButtonColor: '#7021D8'
    });
}

function isToday(date) {
  return isSameDay(date, new Date());
}

// Detalhes de agendamento
function abrirDetalhes(ag) {
  const dateObj = parseISO(ag.scheduledDate);
  agendamentoSelecionado.value = { 
    ...ag,
    hora: format(dateObj, 'HH:mm', { locale: ptBR }),
    data: format(dateObj, 'dd/MM/yyyy', { locale: ptBR }),
  };
  mostrarDetalhesModal.value = true;
}

function fecharDetalhes() {
  mostrarDetalhesModal.value = false;
}

// Quando o modal de detalhes dispara "editar"
function editarAgendamento(agendamento) {
  agendamentoSelecionado.value = { ...agendamento };
  mostrarEditarModal.value = true;
  mostrarDetalhesModal.value = false;
}

function excluirAgendamento(agendamento) {
  agendamentos.value = agendamentos.value.filter(a => a.id !== agendamento.id)
  mostrarDetalhesModal.value = false
  
  Swal.fire({
    title: '🗑️ Excluído!',
    text: 'Agendamento excluído com sucesso!',
    icon: 'info',
    confirmButtonColor: '#7021D8'
  })
}
</script>