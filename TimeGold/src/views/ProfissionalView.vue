<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#3B1172] text-white shadow-lg"
    >
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
      >
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <!-- Botão Mobile -->
          <button
            @click="sidebarOpen = !sidebarOpen"
            class="sm:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href="/" class="text-2xl font-bold">TimeGold</a>
        </div>

        <!-- Navegação / Usuário -->
        <nav class="flex items-center space-x-6">
          <div class="relative group">
            <button
              @click.stop="dropdownOpen = !dropdownOpen"
              class="user-dropdown flex items-center font-bold text-lg hover:text-purple-300 transition duration-150"
            >
              Jênie Danielle
            </button>

            <transition name="fade">
              <div
                v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-60 bg-white text-center text-gray-800 rounded-md shadow-xl z-50"
              >
                <div class="px-4 py-3 text-md text-gray-900">
                  <div class="font-semibold truncate">jenie@gmail.com</div>
                </div>
                <hr />
                <ul class="py-2 text-md text-gray-800 font-medium">
                  <li>
                    <a
                      @click="openModal('dashboard')"
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      @click="openModal('perfil')"
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Perfil</a
                    >
                  </li>
                  <li>
                    <a
                      @click="openModal('configurações')"
                      class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >Configurações</a
                    >
                  </li>
                </ul>
                <hr />
                <div class="py-1">
                  <a
                    href="/"
                    class="block px-4 py-2 text-md text-gray-800 font-medium hover:bg-gray-100 cursor-pointer"
                    >Sair</a
                  >
                </div>
              </div>
            </transition>
          </div>
        </nav>
      </div>
    </header>

    <!-- Estrutura principal -->
    <div class="flex flex-1 pt-20">
      <!-- Sidebar -->
      <transition name="slide">
          <aside
          :class="[
            'bg-[#f8f9fa] rounded-lg p-4 lg:mb-6  overflow-y-auto fixed inset-y-0 top-20 left-0 z-40 w-76 transform transition-transform shadow-lg',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full',
            'lg:static lg:translate-x-0 lg:block'
          ]"
          aria-label="Sidebar"
          >
           <div class="h-full px-3 py-4 overflow-y-auto relative">
          
          <ul class="space-y-2 font-medium mt-10 sm:mt-0">
            <li>
            <button
               @click="openModal('dashboard')"
               class="flex w-full items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
               >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-speedometer2 w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
                  />
                </svg>
                <span class="ms-3 font-semibold">Dashboard</span>
            </button>
          </li>
          <li>
            <button
              @click="openModal('perfil')"
              class="flex w-full items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-circle w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <span class="ml-3 font-semibold">Perfil</span>
            </button>
          </li>
          <li>
            <button
              @click="openModal('agendamentos')"
              class="flex w-full items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-calendar3 w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"
                  />
                  <path
                    d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                  />
                </svg>
                <span class="ml-3 font-semibold">Agendamentos</span>
            </button>
          </li>
          <li>
            <button
              @click="openModal('relatorios')"
              class="flex w-full items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-file-earmark-bar-graph-fill w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"
                  />
                </svg>
                <span class="ml-3 font-semibold">Relatórios</span>
            </button>
          </li>
           <li>
            <button
              @click="openModal('configurações')"
              class="flex w-full items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-gear-wide-connected w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"
                  />
                </svg>
                <span class="ml-3 font-semibold">Configurações</span>
            </button>
          </li>
          </ul>
        </div>
        </aside>
      </transition>

      <!-- Fundo escuro ao abrir sidebar no mobile -->
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-30"
      ></div>

      <!-- Conteúdo principal -->
      <main class="flex-1 p-6 overflow-auto bg-gray-50">
        <component :is="currentModal" v-if="currentModal" />
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-white border-t text-center">
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import FooterComponent from "../components/FooterComponent.vue";
import DashboardComponent from "../components/DashboardComponent.vue";
import AgendamentosComponent from "../components/AgendamentosComponent.vue";
import PerfilProfissionalComponent from "../components/PerfilProfissionalComponent.vue";

// Estados
const sidebarOpen = ref(false);
const dropdownOpen = ref(false);
const currentModal = ref(DashboardComponent); 

// Fecha dropdown ao clicar fora
const closeDropdownOutside = (e) => {
  if (!e.target.closest(".user-dropdown")) dropdownOpen.value = false;
};
onMounted(() => document.addEventListener("click", closeDropdownOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", closeDropdownOutside)
);

function openModal(name) {
  if (name === "dashboard") {
    currentModal.value = DashboardComponent;
  } else if (name === "agendamentos") {
    currentModal.value = AgendamentosComponent;
  } else if (name === "perfil") {
    currentModal.value = PerfilProfissionalComponent;
  } else {
    currentModal.value = null; 
  }
}

function closeModal() {
  currentModal.value = null;
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>