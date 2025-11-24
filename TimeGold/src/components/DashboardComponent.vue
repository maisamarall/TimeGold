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
        <h1 class="text-2xl font-bold text-gray-800">Olá, Dr(a). {{ profile.professional.name }}</h1>
      </div>

      <div class="flex items-center gap-3">
        <p class="text-gray-700 font-semibold">Hoje é {{ dataAtual }}</p>
      </div>
    </header>

    <main>
      <div class="justif-center mt-10 mb-10">

        <!-- Cards de indicadores -->
        <section class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z" />
              </svg>
            </div>
            <p class="text-4xl font-extrabold text-gray-800 mb-2">{{ indicadores.confirmados }}</p>
            <h4 class="text-lg font-medium text-gray-600">Atendimentos confirmados</h4>
          </div>

          <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <p class="text-4xl font-extrabold text-gray-800 mb-2">{{ indicadores.atendidos }}</p>
            <h4 class="text-lg font-medium text-gray-600">Pacientes atendidos</h4>
          </div>

          <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </div>
            <p class="text-4xl font-extrabold text-gray-800">{{ indicadores.pendentes }}</p>
            <h4 class="text-lg font-medium text-gray-600 mt-2">Atendimentos pendentes</h4>
          </div>

          <div class="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center w-full max-w-xs">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
              </svg>
            </div>
            <h3 class="text-4xl font-extrabold text-gray-800 mb-2">{{ indicadores.cancelados }}</h3>
            <p class="text-lg font-medium text-gray-600">Atendimento cancelado</p>
          </div>
        </section>

        <!-- Agendamentos -->
        <section class="bg-white p-4 rounded-xl shadow mt-10 mb-10">
          <h2 class="text-xl font-bold text-purple-900 mt-3 mb-3">Agendamentos do dia</h2>

          <div ref="tabelaScroll" class="overflow-x-auto w-full cursor-grab active:cursor-grabbing select-none">
            <table class="min-w-[700px] w-full text-left border-t border-gray-200">
              <thead>
                <tr class="text-lg text-purple-700">
                  <th class="py-2 px-4">Horário</th>
                  <th class="px-4">Paciente</th>
                  <th class="px-4">Procedimento</th>
                  <th class="px-4">Status</th>
                  <th class="px-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(agendamento, index) in agendamentoDoDia"
                  :key="index"
                  class="border-t text-gray-700 hover:bg-gray-50"
                >
                  <td class="py-3 px-4 font-medium">{{ agendamento.hora }}</td>
                  <td class="px-4">{{ agendamento.paciente }}</td>
                  <td class="px-4">{{ agendamento.procedimento }}</td>
                  <td class="px-4">
                    <span
                      :class="{
                        'px-3 py-1 rounded-full text-sm font-semibold': true,
                        'bg-red-100 text-red-700': agendamento.status === 'Pendente',
                        'bg-yellow-100 text-yellow-700': agendamento.status === 'Em andamento',
                        'bg-green-100 text-green-700': agendamento.status === 'Concluído'
                      }"
                    >
                      {{ agendamento.status }}
                    </span>
                  </td>
                  <td>
                    <div class="flex items-center gap-4">
                      <button
                        @click="openEditModal(agendamento)"
                        class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold"
                      >
                        Editar
                      </button>
                      <button
                        @click="confirmDelete(agendamento)"
                        class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Modal de edição -->
        <EditAgendamentoModalComponent
          v-if="modalEditarAberto"
          :agendamento="agendamentoSelecionado"
          @fechar="modalEditarAberto = false"
          @salvar="saveSchedule"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { carregarDadosDoProfissional } from "@/services/professionalService";
import { carregarDadosDaEmpresa } from "@/services/enterpriseService";
import { getTodaySchedulings, getSchedulingStatistics, updateSchedule, deleteSchedule } from "@/services/scheduleServiceCreate";
import EditAgendamentoModalComponent from "./EditAgendamentoModalComponent.vue";

// Data formatada
const dataAtual = new Date().toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const profile = ref({
  professional: {},
  enterprise: {},
});

const indicadores = ref({
  confirmados: 0,
  atendidos: 0,
  pendentes: 0,
  cancelados: 0,
});

const agendamentoDoDia = ref([]);
const modalEditarAberto = ref(false);
const agendamentoSelecionado = ref(null);

onMounted(async () => {
  profile.value.professional = await carregarDadosDoProfissional();
  profile.value.enterprise = await carregarDadosDaEmpresa();

  await loadSchedulings();
});
async function loadSchedulings() {
  try {
    const professionalId = profile.value.professional.id;

    const lista = await getTodaySchedulings(professionalId);

    if (!Array.isArray(lista)) {
      console.error("A API não retornou uma lista:", lista);
      return;
    }

    const statusMap = {
      0: "Cancelado",
      1: "Pendente",
      2: "Em andamento",
      3: "Concluído",
    };

    agendamentoDoDia.value = lista.map((item) => ({
      id: item.id,
      hora: new Date(item.scheduledDate).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      paciente: item.client?.name || "Não informado",
      procedimento: item.schedulingType?.name || "Não informado",
      status: statusMap[item.status] || "Desconhecido",
    }));

    const stats = await getSchedulingStatistics(professionalId);

    indicadores.value.confirmados = stats.confirmados;
    indicadores.value.atendidos = stats.atendidos;
    indicadores.value.pendentes = stats.pendentes;
    indicadores.value.cancelados = stats.cancelados;

  } catch (err) {
    console.error("Erro ao carregar agendamentos:", err);
  }
}

</script>
