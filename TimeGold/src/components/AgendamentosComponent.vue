<template>
  <section class="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-200">

      <!-- Botão voltar -->
      <a href="profissional" class="text-purple-800 hover:text-purple-600 flex items-center gap-2 mb-6 text-sm sm:text-base">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </a>

      <!-- Título -->
      <div class="text-center mb-8 sm:mb-10">
        <h1 class="text-2xl sm:text-3xl font-bold text-purple-800">
          Calendário de Agendamentos
        </h1>
      </div>

      <!-- Calendário -->
      <section class="lg:flex lg:h-full lg:flex-col">
        <!-- Cabeçalho Responsivo -->
        <header class="bg-purple-100 border border-purple-300 px-4 py-4 rounded-lg">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full">

            <!-- Botão de alterar data / input date -->
            <div class="data relative w-full lg:w-1/3 border border-purple-500 rounded-lg font-semibold text-purple-900 sm:justify-start md:justify-start lg:justify-start">
              <input
                type="date"
                v-model="selectedDate"
                @change="onDateChange"
                class="bg-gray-50 border border-purple-300 rounded-lg text-purple-900 text-md font-semibold focus:ring-purple-500 focus:border-purple-500 w-full ps-10 p-2.5"
              />
            </div>

            <!-- Visões de agendamento -->
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

            <!-- Botão de criar agendamento -->
            <div class="flex justify-end sm:justify-center lg:justify-end items-center gap-2 w-full lg:w-1/3 mr-4">
              <button @click="abrirModal"
              class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-150 flex items-center space-x-2">
              <span>Cadastrar agendamento</span>
              </button>
            </div>

          </div>
        </header>

        <!-- Visualização do calendário -->
        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col mt-4">

          <!-- cabeçalho dias da semana -->
          <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700">
            <div v-for="(d,i) in weekDays" :key="i" class="flex justify-center bg-white py-2">{{ d }}</div>
          </div>

          <!-- células do mês -->
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
                  {{ agendamento.title }}
                </div>
              </div>
            </div>
          </div>

          <!-- células do dia -->
          <div v-else-if="viewMode === 'day'" class="p-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Agendamentos para {{ formattedSelectedDate }}</h2>
              <div v-if="dailyAgendamentos.length > 0" class="space-y-4">
                <div v-for="agendamento in dailyAgendamentos" :key="agendamento.id" class="p-3 border border-gray-300 rounded-lg">
                  <h3 class="font-semibold text-purple-800">{{ agendamento.title }}</h3>
                  <p class="text-sm text-gray-600">Data: {{ agendamento.date }}</p>
                </div>
              </div>
              <div v-else class="text-gray-500">Nenhum agendamento para este dia.</div>
            </div>
          </div>

          <!-- células da semana -->
          <div v-else-if="viewMode === 'week'" class="p-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <h2 class="text-lg font-semibold mb-4">Agendamentos para a semana de {{ formattedWeekRange }}</h2>
              <div v-if="weeklyAgendamentos.length > 0" class="space-y-4">
                <div v-for="agendamento in weeklyAgendamentos" :key="agendamento.id" class="p-3 border border-gray-300 rounded-lg">
                  <h3 class="font-semibold text-purple-800">{{ agendamento.title }}</h3>
                  <p class="text-sm text-gray-600">Data: {{ agendamento.date }}</p>
                </div>
              </div>
              <div v-else class="text-gray-500">Nenhum agendamento para esta semana.</div>
            </div>
          </div>

        </div>

        <!-- Modal para cadastro de agendamento -->
        <AgendamentoFormModal v-if="mostrarModal" @fechar="fecharModal" @salvar="salvarAgendamento" />

      </section>
      <!-- Fim do Calendário -->

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import AgendamentoFormModal from "./AgendamentoFormModal.vue";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
// Estado do modal
const mostrarModal = ref(false);
const abrirModal = () => {
  mostrarModal.value = true;
};
const fecharModal = () => {
  mostrarModal.value = false;
};

// Estado do calendário
const selectedDate = ref(new Date().toISOString().substr(0, 10)); 
const viewMode = ref("month");
const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const agendamentos = ref([]);

const onDateChange = () => {
  // Lógica para atualizar o calendário com base na data selecionada
};
const onViewModeChange = () => {
  // Lógica para atualizar o calendário com base na visão selecionada
};
const salvarAgendamento = (novoAgendamento) => {
  agendamentos.value.push(novoAgendamento);
  fecharModal();
};

const formattedSelectedDate = computed(() => {
  return format(parseISO(selectedDate.value), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
});
const formattedWeekRange = computed(() => {
  const start = startOfWeek(parseISO(selectedDate.value), { weekStartsOn: 0 });
  const end = endOfWeek(parseISO(selectedDate.value), { weekStartsOn: 0 });
  return `${format(start, "dd/MM/yyyy")} - ${format(end, "dd/MM/yyyy")}`;
});

const calendarCells = computed(() => {
  const start = startOfWeek(new Date(new Date(selectedDate.value).getFullYear(), new Date(selectedDate.value).getMonth(), 1), { weekStartsOn: 0 });
  const end = endOfWeek(new Date(new Date(selectedDate.value).getFullYear(), new Date(selectedDate.value).getMonth() + 1, 0), { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start, end });

  return days.map((day) => {
    const isCurrentMonth = isSameMonth(day, new Date(selectedDate.value));
    const dayNumber = isCurrentMonth ? day.getDate() : null;
    const agendamentosDoDia = agendamentos.value.filter(a => isSameDay(parseISO(a.date), day));

    return {
      key: day.toISOString(),
      day: dayNumber,
      isCurrentMonth,
      agendamentos: agendamentosDoDia
    };
  });
});
const dailyAgendamentos = computed(() => {
  return agendamentos.value.filter(a => isSameDay(parseISO(a.date), parseISO(selectedDate.value)));
});
const weeklyAgendamentos = computed(() => {
  const start = startOfWeek(parseISO(selectedDate.value), { weekStartsOn: 0 });
  const end = endOfWeek(parseISO(selectedDate.value), { weekStartsOn: 0 });
  return agendamentos.value.filter(a => {
    const agendamentoDate = parseISO(a.date);
    return agendamentoDate >= start && agendamentoDate <= end;
  });
});
</script>