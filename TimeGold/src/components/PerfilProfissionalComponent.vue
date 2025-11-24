<template>
    <section class="min-h-screen py-16 px-6">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-purple-200">
            <a href="profissional" class="text-purple-800 hover:text-purple-600 flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
            </a>

            <div class="text-center border-b border-purple-100 pb-6">
                <div class="flex justify-center items-center gap-2">
                    <h2 class="text-3xl font-bold text-purple-800">{{ profile.professional.name }}</h2>
                    <!-- Ícone de lápis para editar -->
                    <button @click="editar = !editar" class="text-purple-600 hover:text-purple-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
                        </svg>
                    </button>
                </div>
                <p class="text-lg text-purple-600 font-medium">{{ profile.professional.role }}</p>
                <p class="text-gray-500 mt-1">{{ profile.professional.cro }}</p>
            </div>

            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 class="text-xl font-semibold text-purple-800 mb-4">Informações de Contato</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>
                            <span class="font-semibold">E-mail: </span>
                            <template v-if="editar">
                                <input v-model="profile.professional.email"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />

                                <p v-if="fieldErrors.email" class="text-red-600 text-sm">
                                    {{ fieldErrors.email }}
                                </p>
                            </template>
                            <template v-else>{{ profile.professional.email }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Telefone: </span>
                            <template v-if="editar">
                                <input v-model="profile.professional.phone"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />

                                <p v-if="fieldErrors.phone" class="text-red-600 text-sm">
                                    {{ fieldErrors.phone }}
                                </p>
                            </template>
                            <template v-else>{{ profile.professional.phone }}</template>
                        </li>

                        <li>
                            <span class="font-semibold">Senha: </span>
                            <template v-if="editar">
                                <input 
                                    type="password" v-model="profile.professional.password" class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500"/>

                                <p v-if="fieldErrors.password" class="text-red-600 text-sm">
                                    {{ fieldErrors.password }}
                                </p>
                            </template>
                            <template v-else>
                                ********
                            </template>
                        </li>

                        <li>
                            <span class="font-semibold">Clínica: </span>
                            <span>{{ profile.enterprise.name }}</span>
                            <!-- <span class="font-semibold">Clínica: </span>
                            <template v-if="editar">
                                <input v-model="profile.enterprise.clinic"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.enterprise.name }}</template> -->
                        </li>
                        <li>
                            <span class="font-semibold">Endereço: </span>
                            <template v-if="editar">
                                <span class="font"><br>Rua: </span>
                                <input v-model="profile.enterprise.address.street"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1" />

                                <span class="font"><br>N°: </span>
                                <input v-model="profile.enterprise.address.number"
                                    class="w-full mt-2 bg-transparent border border-gray-300 rounded px-2 py-1" />

                                <span class="font"><br>Cidade: </span>
                                <input v-model="profile.enterprise.address.city"
                                    class="w-full mt-2 bg-transparent border border-gray-300 rounded px-2 py-1" />

                                <span class="font"><br>Estado: </span>
                                <input v-model="profile.enterprise.address.state"
                                    class="w-full mt-2 bg-transparent border border-gray-300 rounded px-2 py-1" />

                                <span class="font"><br>País: </span>
                                <input v-model="profile.enterprise.address.country"
                                    class="w-full mt-2 bg-transparent border border-gray-300 rounded px-2 py-1" />
                            </template>
                            <template v-else>{{ profile.enterprise.address.street }} - {{ profile.enterprise.address.number }}, {{ profile.enterprise.address.city }} - {{ profile.enterprise.address.state }}</template>
                        </li>
                    </ul>
                </div>

                <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 class="text-xl font-semibold text-purple-800 mb-4">Informações Profissionais</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>
                            <span class="font-semibold">Especialidade: </span>
                            <template v-if="editar">
                                <input v-model="profile.professional.function"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                                <p v-if="fieldErrors.Email" class="text-red-600 text-sm">{{ fieldErrors.Email }}</p>
                            </template>
                            <template v-else>{{ profile.professional.function }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Tempo de atuação: </span>
                            <template v-if="editar">
                                <input v-model="profile.professional.actuationTime"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.professional.actuationTime }}</template>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-10 bg-purple-50 border border-purple-100 rounded-xl p-6">
                <h3 class="text-xl font-semibold text-purple-800 mb-3">Sobre</h3>
                <template v-if="editar">
                    <textarea v-model="profile.professional.about" rows="4"
                        class="w-full bg-transparent border border-gray-300 rounded px-2 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"></textarea>
                </template>
                <template v-else>
                    <p class="text-gray-700 leading-relaxed">{{ profile.professional.about }}</p>
                </template>
            </div>

            <div v-if="editar" class="mt-6 flex justify-end">
                <button @click="salvarPerfil"
                    class="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white font-semibold hover:scale-105 transition-transform duration-200">
                    Salvar
                </button>
            </div>

        </div>
    </section>
</template>

<script>
import { carregarDadosDoProfissional, salvarPerfil } from "@/services/professionalService";
import { carregarDadosDaEmpresa, salvarEmpresaPerfil } from "@/services/enterpriseService";

export default {
    data() {
        return {
            editar: false,
            profile: {
                professional: {
                    name: "",
                    cpf: "",
                    email: "",
                    phone: "",
                    function: "",
                    about: "",
                    actuationTime: 0,
                    cro: "",
                },

                enterprise: {
                    name: "",
                    cnpj: "",
                    address: "",
                    schedulingType: [],
                    professionals: [] 
                }
            },
            fieldErrors: {}
        }
    },

    async mounted() {
        try {
            const dadosProfessional = await carregarDadosDoProfissional();
            this.profile.professional = dadosProfessional;
        } catch (error) {
            console.error("Erro ao carregar profissional:", error);
        }    
        try {
            const dadosEmpresa = await carregarDadosDaEmpresa();
            this.profile.enterprise = dadosEmpresa;
        } catch (error) {
            console.error("Erro ao carregar empresa:", error);
        }
    },

    methods: {
        async salvarPerfil() {
            this.fieldErrors = {};

            try {
                await salvarPerfil(this.profile.professional);
                await salvarEmpresaPerfil(this.profile.enterprise);

                alert("Perfil atualizado com sucesso!");
                this.editar = false;
            } catch (error) {
                console.log(error.response.data);

                if (Array.isArray(error.response?.data)) {
                    error.response.data.forEach(err => {this.fieldErrors[err.property.toLowerCase()] = err.message;});
                }

                else if (error.response?.data?.errors) {
                    for (const field in error.response.data.errors) {
                        this.fieldErrors[field] = error.response.data.errors[field][0];
                    }
                }
            }
        }
    }
};

</script>