<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white shadow-md">
            <div class="container mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
                <a href="/" class="text-2xl font-bold">TimeGold</a>
            </div>
        </header>

        <section class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white py-20 px-4 sm:px-6 lg:px-8">
            <div class="container mx-auto text-center max-w-3xl">
                <h2 class="text-4xl sm:text-5xl font-extrabold mb-6">Conheça o TimeGold</h2>
                <p class="text-lg sm:text-xl text-purple-200 mb-8">
                    Uma solução completa para gerenciar atendimentos, equipes e agendamentos com eficiência e
                    praticidade.
                </p>
                <a href="#sobre"
                    class="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-purple-100 transition">
                    Saiba Mais
                </a>
            </div>
        </section>

        <section id="sobre" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div class="container mx-auto max-w-5xl text-center">
                <h3 class="text-3xl font-bold mb-6 text-gray-800">O que é o TimeGold?</h3>
                <p class="text-gray-700 text-lg mb-12">
                    O TimeGold é uma plataforma profissional que permite gerenciar sua equipe e agendamentos de forma
                    prática e intuitiva.
                    Com recursos inteligentes, você consegue visualizar atendimentos, organizar horários, acompanhar
                    resultados e manter tudo sob controle.
                </p>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <div
                            class="w-16 h-16 mb-4 mx-auto flex items-center justify-center bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white rounded-full">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">Gestão de Equipes</h4>
                        <p class="text-gray-600 text-sm">Controle completo da sua equipe, com perfis, funções e
                            especialidades organizadas.</p>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <div
                            class="w-16 h-16 mb-4 mx-auto flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">Agendamentos Inteligentes</h4>
                        <p class="text-gray-600 text-sm">Organize horários, confirme atendimentos e evite conflitos de
                            agenda de forma automatizada.</p>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <div
                            class="w-16 h-16 mb-4 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">Relatórios e Indicadores</h4>
                        <p class="text-gray-600 text-sm">Acompanhe métricas de atendimentos, produtividade e resultados
                            de sua equipe em tempo real.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div class="container mx-auto text-center max-w-3xl">
                <h3 class="text-3xl font-bold mb-6">Tem alguma dúvida?</h3>
                <p class="text-lg mb-8">Fale com a nossa equipe agora pelo WhatsApp e tire todas as suas dúvidas.</p>
                <a href="https://wa.me/5511999999999?text=Olá,%20tenho%20uma%20dúvida" target="_blank"
                    class="bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-purple-100 transition">
                    Falar no WhatsApp
                </a>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "SaibaMais",
};
</script>

<style scoped>
</style>
