<template>
    <div>
        <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white shadow-lg">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <div class="flex items-center">
                    <img src="#" alt="">
                    <a href="#" class="text-2xl font-bold">TimeGold</a>
                </div>

                <nav class="hidden md:flex items-center space-x-6">
                    <a href="#" class="hover:text-purple-300 transition duration-150">Agenda</a>
                    <a href="#" class="hover:text-purple-300 transition duration-150">Equipe</a>

                    <div class="relative group">
                        <button @click="toggleDropdown"
                            class="flex items-center hover:text-purple-300 transition duration-150">
                            Admin
                            <svg class="ml-1 w-4 h-4 transform transition-transform duration-200"
                                :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        <div v-show="isDropdownOpen"
                            class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Perfil</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Configurações</a>
                            <div class="border-t border-gray-200"></div>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sair</a>
                        </div>
                    </div>
                    <button class="bg-gradient-to-r from-[#7021D5] to-[#5013A0] border border-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg transition duration-150">
                        Meu plano
                    </button>
                </nav>
            </div>
        </header>

        <main class="mt-20">
            <section class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-12 px-4 mb-10 sm:px-6 lg:px-8">
                <div class="container mx-auto">
                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start pt-8 mb-12">
                        <div class="mb-10 lg:mb-0">
                            <p class="text-xl mb-4">Olá, {{ adminName }}!</p>

                            <div class="flex items-start space-x-8">
                                <span class="text-9xl font-light leading-none">20</span>
                                <div class="text-3xl font-light pt-3 leading-snug">
                                    atendimentos<br>confirmados para hoje!
                                </div>
                                <div class="flex items-center justify-center h-24 w-24 ml-8">
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] p-6 rounded-lg shadow-xl lg:w-1/3">
                            <h3 class="text-lg font-semibold mb-3 border-b border-purple-700 pb-2">Com mais
                                atendimentos:</h3>
                            <ul class="space-y-2">
                                <li>• Profissional 1 - 6 atendimentos</li>
                                <li>• Profissional 2 - 5 atendimentos</li>
                                <li>• Profissional 3 - 4 atendimentos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Div de indicadores -->
            <div class="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start">
                    <div class="flex items-center space-x-4 mb-4">
                        <svg class="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z" />
                        </svg>
                        <p class="text-4xl font-bold">12</p>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700">Atendimentos confirmados hoje</h4>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start">
                    <div class="flex items-center space-x-4 mb-4">
                        <svg class="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <p class="text-4xl font-bold">8</p>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700">Usuários Ativos</h4>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start">
                    <div class="flex items-center space-x-4 mb-4">
                        <svg class="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5 12c-1.22 0-2.3.61-2.94 1.55-.42-.25-.7-.57-.7-.57C12.4 12.3 10.9 11 9 11c-2.76 0-5 2.24-5 5v3h14v-3c0-1.74-1.04-3.23-2.5-3.87zm-7.5-2c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zM20 16c-.78 0-1.42.59-1.92 1.34C17.39 17.75 16.22 18 15 18s-2.39-.25-3.08-.66c-.5-.75-1.14-1.34-1.92-1.34-1.22 0-2.3.61-2.94 1.55-.42-.25-.7-.57-.7-.57C7.4 17.3 5.9 16 4 16c-2.76 0-5 2.24-5 5v3h22v-3c0-1.74-1.04-3.23-2.5-3.87zm-7.5-2c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" />
                        </svg>
                        <p class="text-4xl font-bold">135</p>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700">Clientes Cadastrados</h4>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-between items-start">
                    <div class="flex items-center space-x-4 mb-4">
                        <svg class="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                        <div class="flex items-baseline">
                            <p class="text-4xl font-bold">3</p>
                            <span class="ml-2 text-xl font-medium text-gray-500">novos</span>
                        </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-700">Agendamentos pendentes</h4>
                </div>
            </div>

            <!-- Sessão de planos -->
             <PlanoComponent />

            <!-- Gerenciar usuarios -->
            <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div class="container mx-auto p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-xl">
                    <div class="flex justify-between items-center mb-10">
                        <h2 class="text-3xl font-bold text-gray-600">Gerenciar Equipe</h2>

                        <div class="flex items-center space-x-4">
                            <div class="relative">
                                <input type="text" placeholder="Pesquisar..."
                                    class="border border-gray-300 p-2 pl-4 pr-10 rounded-lg w-64 focus:ring-purple-500 focus:border-purple-500">
                                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <button class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-150 flex items-center space-x-2">
                                <a href="CadastroUserView.vue">Cadastrar Usuário</a>
                                <span class="text-2xl">+</span>
                            </button>
                        </div>
                    </div>
                    <div class="overflow-x-auto bg-white rounded-lg">
                        <table class="min-w-full divide-y divide-gray-900">
                            <thead class="border-b border-gray-200">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nome
                                        do Profissional</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Email</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Perfil</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Especialidade/Função</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Status</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Ações</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Maisa Amaral</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">maisa@gmail.com</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Profissional</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dentista Geral</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-200 text-purple-800">
                                            Ativo
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-purple-600">
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Editar</button>
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jênie Danielle</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jênie@gmail.com</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Profissional</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dentista Geral</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-200 text-purple-800">
                                            Ativo
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-purple-600">
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Editar</button>
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Simone Siqueira</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">simone@gmail.com</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Profissional</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dentista Geral</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-200 text-purple-800">
                                            Ativo
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-purple-600">
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Editar</button>
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Excluir</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-8 text-right">
                        <button
                            class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-150 flex items-center space-x-2 ml-auto">
                            Gerenciar horários
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <FooterComponent />
</template>


<script>
import FooterComponent from '../components/FooterComponent.vue'
import PlanoComponent from '../components/PlanoComponent.vue';

export default {
    name: 'AdminDashboard',
    components: {
        FooterComponent,
        PlanoComponent,
    },
    data() {
        return {
            adminName: 'User',
            isDropdownOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
};
</script>