<template>
  <!-- Navbar -->
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#3B1172] text-white shadow-lg"
  >
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <a href="#">
          <img
            src="@/assets/logo.png"
            alt="Logo"
            class="h-16 sm:h-20 w-auto mr-3"
          />
        </a>
      </div>

      <!-- Navegação -->
      <nav class="flex items-center space-x-6">
        <div class="relative inline-block">
          <!-- Botão -->
          <img
            @click.stop="dropdownOpen = !dropdownOpen"
            class="user-dropdown w-14 h-14 rounded-full cursor-pointer"
            src="https://img.icons8.com/color/48/user-female-circle--v11.png"
            alt="Usuário"
          />

          <!-- Dropdown -->
          <transition name="fade">
            <div
              v-if="dropdownOpen"
              class="absolute right-0 z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
            >
              <div class="px-4 py-3 text-md text-gray-900">
                <div>Maisa Amaral</div>
                <div class="font-medium truncate">maisa@gmail.com</div>
              </div>
              <ul class="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Perfil</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Configurações</a
                  >
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >Sair</a
                >
              </div>
            </div>
          </transition>
        </div>
      </nav>
    </div>
  </header>

  <!-- Conteúdo da página-->
  <main class="mt-24 p-6 min-h-screen">
    <div class="container mx-auto items-center justify-center">
      <!-- Menu Lateral -->
      <!-- Botão para abrir no mobile -->
      <button
        @click="sidebarOpen = !sidebarOpen"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Abrir menu lateral</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        :class="[
          'fixed top-20 left-0 z-40 w-64 h-screen bg-gray-50 transition-transform transform',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'sm:translate-x-0',
        ]"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 relative">
          <!-- Botão "X" para fechar no mobile -->
          <button
            @click="sidebarOpen = false"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 sm:hidden"
          >
            ✕
          </button>
          <ul class="space-y-2 font-medium mt-10 sm:mt-0">
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
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
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
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
                <span class="ml-3 font-semibold">Usúarios</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
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
                <span class="ml-3 font-semibold">Agendamento</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-file-earmark-text-fill w-6 h-6 font-semibold ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
                  />
                </svg>
                <span class="ml-3 font-semibold">Planos & Assinaturas</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
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
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white"
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
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Overlay (fecha ao clicar fora no mobile) -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
        @click="sidebarOpen = false"
      ></div>
      <!-- Fim do Menu Lateral -->

      <!-- Botão Gerenciar Assinatura -->
      <div class="flex justify-end mb-6 mr-8">
        <a href="#">
          <button
            class="bg-[#7021D8] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#3B1172] transition-colors"
          >
            Gerenciar Assinatura
          </button>
        </a>
      </div>

      <!-- Grupo de Cards de indicadores-->
      <div class="p-5 sm:ml-64">
        <div class="p-5">
          <div
            class="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start"
            >
              <div class="flex items-center space-x-4 mb-4">
                <svg
                  class="w-10 h-10 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z"
                  />
                </svg>
                <p class="text-4xl font-bold">12</p>
              </div>
              <h4 class="text-lg font-semibold text-gray-700">
                Atendimentos confirmados hoje
              </h4>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start"
            >
              <div class="flex items-center space-x-4 mb-4">
                <svg
                  class="w-10 h-10 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                <p class="text-4xl font-bold">8</p>
              </div>
              <h4 class="text-lg font-semibold text-gray-700">
                Usuários Ativos
              </h4>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start"
            >
              <div class="flex items-center space-x-4 mb-4">
                <svg
                  class="w-10 h-10 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  />
                </svg>
                <div class="flex items-baseline">
                  <p class="text-4xl font-bold">3</p>
                  <span class="ml-2 text-xl font-medium text-gray-500"
                    >novos</span
                  >
                </div>
              </div>
              <h4 class="text-lg font-semibold text-gray-700">
                Agendamentos pendentes
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!-- Fim do grupo de Cards -->

      <div class="p-5 sm:ml-64">
        <div class="p-5">
          <div class="grid grid-cols-1 mt-20 sm:grid-cols-1 lg:grid-cols-2 gap-10">

            <!-- Calendario de agendamentos -->
            <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start" >
              <div class="flex items-center mb-4 w-full">
                <table class="w-full text-sm text-left border-separate" style="border-spacing: 0 10px;">
                  <thead class="text-xs uppercase text-[15px] font-semibold text-black">
                    <tr>
                      <!-- Seta esquerda -->
                      <th class="w-6 text-left">
                        <svg
                          class="w-4 h-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 8 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                          />
                        </svg>
                      </th>

                      <!-- Mês central -->
                      <th class="text-center" colspan="5">Setembro 2025</th>

                      <!-- Seta esquerda -->
                      <th class="w-6 text-right">
                        <svg
                          class="w-4 h-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 8 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                          />
                        </svg>
                      </th>

                      <!-- Seta direita -->
                      <th class="w-6 text-right">
                        <svg
                          class="w-4 h-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 8 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                          />
                        </svg>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="text-center">
                    <tr class="h-0">
                        <td colspan="10" class="bg-gray-300"></td>
                    </tr>
                    <tr>
                      <th>D</th>
                      <th>S</th>
                      <th>T</th>
                      <th>Q</th>
                      <th>Q</th>
                      <th>S</th>
                      <th>S</th>
                    </tr>
                    
                    <tr>
                      <td class="text-gray-500">31</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>

                    <tr>
                      <td>21</td>
                      <td class="bg-purple-300 rounded-full w-8 h-8 flex items-center justify-center mx-auto">22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>

                    <tr>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td class="text-gray-500">1</td>
                      <td class="text-gray-500">2</td>
                      <td class="text-gray-500">3</td>
                      <td class="text-gray-500">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Fim do calendario -->

            <!-- Tabela de agendamentos -->
             <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700">
                        <tr>
                            <th scope="col" class="py-3 text-[15px] text-semibold">
                                Agendamentos de hoje
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class="bg-white border-b border-gray-200 font-medium text-gray-600">
                            <th scope="row" class="px-6 py-4 whitespace-nowrap">
                                10:00
                            </th>
                            <td class="px-6 py-4">
                                Tom Holland
                            </td>
                            <td class="px-6 py-4">
                                Dr. Jênie
                            </td>
                            <td class="px-6 py-4 bg-purple-300 rounded-full h-8 flex items-center justify-center mt-2 text-purple-800">
                                Disponível
                            </td>
                        </tr>

                        <tr class="bg-white border-b border-gray-200 font-medium text-gray-600">
                            <th scope="row" class="px-6 py-4 whitespace-nowrap">
                                8:30
                            </th>
                            <td class="px-6 py-4">
                                João Almeida 
                            </td>
                            <td class="px-6 py-4">
                                Dr. Simone
                            </td>
                            <td class="px-6 py-4 bg-purple-300 rounded-full h-8 flex items-center justify-center mt-2 text-purple-800">
                                Pendente
                            </td>
                        </tr>

                        <tr class="bg-white border-b border-gray-200 font-medium text-gray-600">
                            <th scope="row" class="px-6 py-4 whitespace-nowrap">
                                11:00
                            </th>
                            <td class="px-6 py-4">
                                Yuri Alberto
                            </td>
                            <td class="px-6 py-4">
                                Dr. Jênie
                            </td>
                            <td class="px-6 py-4 bg-purple-300 rounded-full h-8 flex items-center justify-center mt-2 text-purple-800">
                                Disponível
                            </td>
                        </tr>

                        <tr class="bg-white border-b border-gray-200 font-medium text-gray-600">
                            <th scope="row" class="px-6 py-4 whitespace-nowrap">
                                11:30
                            </th>
                            <td class="px-6 py-4">
                                Maria Silva
                            </td>
                            <td class="px-6 py-4">
                                Dr. Simone
                            </td>
                            <td class="px-6 py-4 bg-purple-300 rounded-full h-8 flex items-center justify-center mt-2 text-purple-800">
                                Disponível
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <!-- Fim da tabela de agendamentos -->

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Estados separados
const sidebarOpen = ref(false);
const dropdownOpen = ref(false);

// Fecha o dropdown ao clicar fora
const closeDropdownOutside = (e) => {
  if (!e.target.closest(".user-dropdown")) dropdownOpen.value = false;
};

onMounted(() => document.addEventListener("click", closeDropdownOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", closeDropdownOutside)
);
</script>