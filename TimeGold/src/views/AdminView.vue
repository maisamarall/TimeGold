<template>
    <div>
        <header
            class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white shadow-lg">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <div class="flex items-center">
                    <a href="#" class="text-2xl font-bold">TimeGold</a>
                </div>

                <nav class="hidden md:flex items-center space-x-6">
                    <a href="profissional" class="hover:text-purple-300">Agenda</a>
                    <a href="#equipe" class="hover:text-purple-300">Equipe</a>

                    <div class="relative">
                        <button @click="toggleDropdown" class="flex items-center hover:text-purple-300">
                            Admin
                            <svg class="ml-1 w-4 h-4 transform transition-transform"
                                :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div v-show="isDropdownOpen"
                            class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl z-50">
                            <a href="Perfil" class="block px-4 py-2 hover:bg-gray-100">Perfil</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Configurações</a>
                            <div class="border-t border-gray-200"></div>
                            <button @click="logout" class="w-full text-left px-4 py-2 hover:bg-gray-100"> Sair</button>
                        </div>
                    </div>
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
                                <span class="text-9xl font-light leading-none">{{ atendimentosHoje }}</span>
                                <div class="text-3xl font-light pt-3 leading-snug">
                                    atendimentos<br>confirmados para hoje!
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] p-6 rounded-lg shadow-xl lg:w-1/3">
                            <h3 class="text-lg font-semibold mb-3 border-b border-purple-700 pb-2">
                                Com mais atendimentos:
                            </h3>
                            <ul class="space-y-2">
                                <li>• Profissional 1 - 6 atendimentos</li>
                                <li>• Profissional 2 - 6 atendimentos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WIDGETS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4 place-items-center">
                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div
                        class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white">
                        <svg class="w-8 h-8" fill="currentColor">
                            <path
                                d="M19 4h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 16H7V10h12zM9 8h6V6H9z" />
                        </svg>
                    </div>
                    <p class="text-4xl font-extrabold text-gray-800 mb-2">{{ atendimentosHoje }}</p>
                    <h4 class="text-lg font-medium text-gray-600"> Atendimentos confirmados hoje </h4>
                </div>

                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-500 text-white">
                        <svg class="w-8 h-8" fill="currentColor">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <p class="text-4xl font-extrabold text-gray-800 mb-2">{{ usuariosAtivos }}</p>
                    <h4 class="text-lg font-medium text-gray-600">Usuários Ativos</h4>
                </div>

                <div
                    class="flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                    <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 text-white">
                        <svg class="w-8 h-8" fill="currentColor">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </div>
                    <p class="text-4xl font-extrabold text-gray-800">{{ agendamentosPendentes }}</p>
                    <!-- <span class="ml-2 text-xl text-gray-500">novos</span> -->
                    <h4 class="text-lg font-medium text-gray-600 mt-2">Agendamentos pendentes</h4>
                </div>
            </div>

            <PlanoComponent />

            <!-- EQUIPE -->
            <section id="equipe" class="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-20">
                <div class="container mx-auto p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-xl">

                    <div class="flex justify-between items-center mb-10">
                        <h2 class="text-3xl font-bold text-gray-700">Gerenciar Equipe</h2>

                        <div class="flex items-center space-x-4">
                            <input type="text" placeholder="Pesquisar por nome..." v-model="termoBusca"
                                class="border border-purple-500 text-gray-800 placeholder-gray-500 bg-white/80 rounded-lg w-64 p-2 pl-4" />

                            <button @click="abrirModalCadastro"
                                class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-2 px-4 rounded-lg hover:opacity-90">
                                Cadastrar profissional +
                            </button>
                        </div>
                    </div>

                    <!-- TABELA -->
                    <div class="overflow-x-auto bg-white rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="border-b border-gray-200">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Nome</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Email</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Perfil</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Especialidade
                                    </th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Status</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold text-gray-800">Ações</th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
                                    <td class="px-6 py-4 text-sm text-gray-900">{{ usuario.name }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">{{ usuario.email }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">{{ usuario.type === 1 ? 'Profissional'
                                        : usuario.type === 2 ? 'Admin' : 'Desconhecido' }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">{{ usuario.function }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        <span :class="[
                                            'px-3 py-1 rounded-full text-xs font-semibold',
                                            usuario.active
                                                ? 'bg-purple-200 text-purple-800'
                                                : 'bg-gray-200 text-gray-600'
                                        ]">
                                            {{ !usuario.active ? 'Ativo' : 'Inativo' }}
                                        </span>
                                    </td>

                                    <td class="px-6 py-4 text-sm flex gap-2">
                                        <button class="text-blue-600 hover:text-blue-800"
                                            @click="abrirModalEditar(usuario)" title="Editar">
                                            <i class="fas fa-pencil-alt"></i>
                                        </button>


                                        <!-- <button @click="confirmarExclusao(usuario)"
                                            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                            Excluir
                                        </button> -->

                                        <button @click="confirmarExclusao(usuario)"
                                            class="text-red-500 hover:text-red-700">
                                            🗑️
                                        </button>

                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

        </main>

        <UserFormModal v-if="modalCadastroAberto" @close="modalCadastroAberto = false" @save="salvarUsuario" />

        <EditUserModalComponent v-if="modalEditarAberto" :usuario="usuarioSelecionado"
            @fechar="modalEditarAberto = false" @salvar="atualizarUsuario" />

        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import PlanoComponent from '../components/PlanoComponent.vue'
import UserFormModal from '../components/UserFormModal.vue'
import EditUserModalComponent from '../components/EditUserModalComponent.vue'
import { equipeService } from '../services/equipeService';
import authService from '@/services/authServices.js';
import dashboardService from '../services/dashboardService';

import Swal from 'sweetalert2'

export default {
    name: 'AdminDashboard',
    components: {
        FooterComponent,
        PlanoComponent,
        UserFormModal,
        EditUserModalComponent,
    },

    data() {
        return {
            adminName: '',

            isDropdownOpen: false,

            atendimentosHoje: 0,
            agendamentosPendentes: 0,
            usuariosAtivos: 0,
            loading: true,
            error: "",

            modalCadastroAberto: false,
            modalEditarAberto: false,

            usuarioSelecionado: null,
            termoBusca: '',

            usuarios: []
        }
    },

    computed: {
        usuariosFiltrados() {
            return this.usuarios.filter(usuario =>
                usuario.name.toLowerCase().includes(this.termoBusca.toLowerCase())
            )
        }
    },

    async mounted() {
        this.carregarEquipe()

        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            const user = JSON.parse(storedUser);
            this.adminName = user.name;
        }

        //Carregar dados do dashboard
        const user = authService.getUser();
        const enterpriseId = user.enterpriseId;

        const result = await dashboardService.getWidgetsData(enterpriseId);

        if (result.success) {
            this.atendimentosHoje = result.hoje;
            this.agendamentosPendentes = result.pendentes;
            this.usuariosAtivos = result.ativos;
        } else {
            this.error = result.message;
        }
        console.log(result);
        this.loading = false;
    },

    methods: {

        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            window.location.href = '/';  
        },

        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },

        async carregarEquipe() {
            try {
                const response = await equipeService.listar()
                this.usuarios = response.data
            } catch (error) {
                console.error('Erro ao carregar usuários:', error)
            }
        },

        abrirModalCadastro() {
            this.modalCadastroAberto = true
        },

        abrirModalEditar(usuario) {
            this.usuarioSelecionado = { ...usuario }
            this.modalEditarAberto = true
        },

        async salvarUsuario(usuario) {
            try {
                console.log("fjewefjkwfjwjlk")
                await equipeService.criar(usuario)

                Swal.fire('Sucesso!', 'Profissional cadastrado!', 'success')

                this.modalCadastroAberto = false
                this.carregarEquipe()

            } catch (error) {
                Swal.fire('Erro', 'Não foi possível cadastrar.', 'error')
            }
        },

        async atualizarUsuario(usuarioEditado) {
            try {
                await equipeService.atualizar(usuarioEditado)

                Swal.fire('Sucesso!', 'Profissional atualizado!', 'success')

                this.modalEditarAberto = false
                
                this.carregarEquipe()

            } catch (error) {
                Swal.fire('Erro', 'Falha ao atualizar.', 'error')
            }
        },

        confirmarExclusao(usuario) {
            Swal.fire({
                title: 'Tem certeza?',
                text: `Deseja excluir ${usuario.name}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7021D8',
                cancelButtonColor: '#aaa',
                confirmButtonText: 'Sim, excluir!',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await equipeService.delete(usuario.id)
                    this.carregarEquipe()
                    Swal.fire('Excluído!', `${usuario.name} foi removido.`, 'success')
                }
            })
        }
    }
}
</script>
