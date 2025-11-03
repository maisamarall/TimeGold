<template>
    <div>
        <header
            class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white shadow-lg">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <div class="flex items-center">
                    <img src="#" alt="">
                    <a href="#" class="text-2xl font-bold">TimeGold</a>
                </div>

                <nav class="hidden md:flex items-center space-x-6">
                    <a href="#" class="hover:text-purple-300 transition duration-150">Agenda</a>
                    <a href="#equipe" class="hover:text-purple-300 transition duration-150">Equipe</a>

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
                            <a href="Perfil" class="block px-4 py-2 hover:bg-gray-100">Perfil</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Configurações</a>
                            <div class="border-t border-gray-200"></div>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sair</a>
                        </div>
                    </div>
                    <!-- <button class="bg-gradient-to-from-[#7021D5] to-[#5013A0] border border-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg transition duration-150">
                        Meu plano
                    </button> -->
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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4 place-items-center">
                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div
                        class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z" />
                        </svg>
                    </div>
                    <p class="text-4xl font-extrabold text-gray-800 mb-2">12</p>
                    <h4 class="text-lg font-medium text-gray-600"> Atendimentos confirmados hoje </h4>
                </div>

                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div
                        class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <p class="text-4xl font-extrabold text-gray-800 mb-2">8</p>
                    <h4 class="text-lg font-medium text-gray-600">Usuários Ativos</h4>
                </div>

                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div
                        class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </div>
                    <div class="flex items-baseline justify-center">
                        <p class="text-4xl font-extrabold text-gray-800">3</p>
                        <span class="ml-2 text-xl font-medium text-gray-500">novos</span>
                    </div>
                    <h4 class="text-lg font-medium text-gray-600 mt-2">
                        Agendamentos pendentes
                    </h4>
                </div>
            </div>

            <!-- Sessão de planos -->
            <PlanoComponent />

            <section id="equipe" class="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div class="container mx-auto p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-xl">

                    <div class="flex justify-between items-center mb-10">
                        <h2 class="text-3xl font-bold text-gray-700">Gerenciar Equipe</h2>

                        <div class="flex items-center space-x-4">
                            <div class="relative">
                                <input type="text" placeholder="Pesquisar por nome..." v-model="termoBusca"
                                    class="border border-purple-500 text-gray-800 placeholder-gray-500 bg-white/80 rounded-lg w-64 p-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200" />
                                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                            <button @click="abrirModal"
                                class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-150 flex items-center space-x-2">
                                <span>Cadastrar profissional</span>
                                <span class="text-2xl">+</span>
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto bg-white rounded-lg">
                        <table class="min-w-full divide-y divide-gray-900">
                            <thead class="border-b border-gray-200">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nome do
                                        Profissional</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Email</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Perfil</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                                        Especialidade/Função</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Ações</th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(usuario, index) in usuariosFiltrados" :key="index">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ usuario.nome }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ usuario.email }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ usuario.perfil }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{
                                        usuario.especialidade }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            :class="['px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full', usuario.status === 'Ativo' ? 'bg-purple-200 text-purple-800' : 'bg-gray-200 text-gray-700']">
                                            {{ usuario.status }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-purple-600">
                                        <button type="button"
                                            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            Editar
                                        </button>
                                        <button @click="abrirModalExcluir(usuario)" type="button"
                                            class="text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <transition name="fade">
                        <div v-if="mostrarModalExcluir"
                            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div class="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4">Excluir profissional</h3>
                                <p class="text-gray-600 mb-6">
                                    Tem certeza de que deseja excluir <strong>{{ usuarioSelecionado?.nome }}</strong>?
                                </p>
                                <div class="flex justify-center gap-4">
                                    <button @click="confirmarExclusao"
                                        class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg">
                                        Excluir
                                    </button>
                                    <button @click="cancelarExclusao"
                                        class="border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-2 rounded-lg">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </section>

        </main>
    </div>

    <UserFormModal v-if="mostrarModal" @fechar="fecharModal" @salvar="salvarUsuario" />

    <div v-if="usuarioParaExcluir" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 text-center relative">
            <h3 class="text-xl font-semibold text-purple-800 mb-3">
                Confirmar exclusão
            </h3>
            <p class="text-gray-600 mb-6">
                Tem certeza que deseja excluir <br />
                <strong>{{ usuarioParaExcluir.nome }}</strong>?
            </p>
            <div class="flex justify-center gap-3">
                <button @click="usuarioParaExcluir = null"
                    class="px-4 py-2 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100 font-medium transition-colors duration-200">
                    Cancelar
                </button>

                <button @click="confirmarExclusao"
                    class="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700">
                    Excluir
                </button>

            </div>
        </div>
    </div>

    <FooterComponent />

</template>

<!-- chamadas dos componentes e as importações -->
<script>
import FooterComponent from '../components/FooterComponent.vue'
import PlanoComponent from '../components/PlanoComponent.vue'
import UserFormModal from '../components/UserFormModal.vue'

export default {
    name: 'AdminDashboard',
    components: {
        FooterComponent,
        PlanoComponent,
        UserFormModal,
    },
    data() {
        return {
            adminName: 'Admin',
            isDropdownOpen: false,

            mostrarModal: false,

            mostrarModalExcluir: false,
            usuarioSelecionado: null,

            termoBusca: '',

            usuarios: [
                {
                    nome: 'Maisa Amaral',
                    email: 'maisa@gmail.com',
                    perfil: 'Profissional',
                    especialidade: 'Administradora',
                    status: 'Ativo',
                },
                {
                    nome: 'Jênie Danielle',
                    email: 'jenie@gmail.com',
                    perfil: 'Profissional',
                    especialidade: 'Dentista Geral',
                    status: 'Ativo',
                },
            ],
        }
    },

    computed: {
        usuariosFiltrados() {
            return this.usuarios.filter((usuario) =>
                usuario.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
            )
        },
    },

    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },

        abrirModal() {
            this.mostrarModal = true
        },
        fecharModal() {
            this.mostrarModal = false
        },

        salvarUsuario(usuario) {
            this.usuarios.push({
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil,
                especialidade: usuario.especialidade,
                status: usuario.status === 'ativo' ? 'Ativo' : 'Inativo',
            })
            this.mostrarModal = false
        },

        abrirModalExcluir(usuario) {
            this.usuarioSelecionado = usuario
            this.mostrarModalExcluir = true
        },
        cancelarExclusao() {
            this.mostrarModalExcluir = false
            this.usuarioSelecionado = null
        },
        confirmarExclusao() {
            this.usuarios = this.usuarios.filter(
                (u) => u !== this.usuarioSelecionado
            )
            this.cancelarExclusao()
        },
    },
}
</script>
