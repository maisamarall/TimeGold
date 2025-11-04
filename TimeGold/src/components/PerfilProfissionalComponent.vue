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
                    <h2 class="text-3xl font-bold text-purple-800">{{ profile.name }}</h2>
                    <!-- Ícone de lápis para editar -->
                    <button @click="editar = !editar" class="text-purple-600 hover:text-purple-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
                        </svg>
                    </button>
                </div>
                <p class="text-lg text-purple-600 font-medium">{{ profile.role }}</p>
                <p class="text-gray-500 mt-1">{{ profile.cro }}</p>
            </div>

            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 class="text-xl font-semibold text-purple-800 mb-4">Informações de Contato</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>
                            <span class="font-semibold">E-mail: </span>
                            <template v-if="editar">
                                <input v-model="profile.email"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.email }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Telefone: </span>
                            <template v-if="editar">
                                <input v-model="profile.phone"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.phone }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Clínica: </span>
                            <template v-if="editar">
                                <input v-model="profile.clinic"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.clinic }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Endereço: </span>
                            <template v-if="editar">
                                <input v-model="profile.address"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.address }}</template>
                        </li>
                    </ul>
                </div>

                <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 class="text-xl font-semibold text-purple-800 mb-4">Informações Profissionais</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>
                            <span class="font-semibold">Especialidade: </span>
                            <template v-if="editar">
                                <input v-model="profile.role"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.role }}</template>
                        </li>
                        <li>
                            <span class="font-semibold">Tempo de atuação: </span>
                            <template v-if="editar">
                                <input v-model="profile.yearsExperience"
                                    class="w-full bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                            </template>
                            <template v-else>{{ profile.yearsExperience }} anos</template>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-10 bg-purple-50 border border-purple-100 rounded-xl p-6">
                <h3 class="text-xl font-semibold text-purple-800 mb-3">Sobre</h3>
                <template v-if="editar">
                    <textarea v-model="profile.about" rows="4"
                        class="w-full bg-transparent border border-gray-300 rounded px-2 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"></textarea>
                </template>
                <template v-else>
                    <p class="text-gray-700 leading-relaxed">{{ profile.about }}</p>
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
export default {
    data() {
        return {
            editar: false,
            profile: {
                name: "Jênie Danielle",
                role: "Dentista Geral",
                cro: "CRO-SP 12456",
                email: "jenie@gmail.com",
                phone: "(14) 99788-3117",
                clinic: "TimeGold",
                address: "Rua das Flores, 245 - São Paulo, SP",
                about: "Jênie Danielle é a dentista geral da clínica TimeGold, responsável por fazer boa parte dos procedimentos odontológicos da clínica...",
                yearsExperience: 8
            }
        }
    },
    methods: {
        salvarPerfil() {
            console.log("Perfil salvo:", this.profile);
            this.editar = false;
        }
    }
}
</script>