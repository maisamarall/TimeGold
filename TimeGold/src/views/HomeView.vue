<template>
    <nav class="select-none fundo scroll-smooth fixed z-50 top-0 w-full  flex justify-center gap-40 md:gap-0 2xl:gap-40 pt-10" id="inicio">
        <h1 class="font-semibold pb-5 text-[20px] 2xl:text-[23px] md:mr-64">TimeGold</h1>
        <ul class="flex gap-10 2xl:ml-80">
            <li class="hidden sm:inline-block hover:border-b-2 hover:border-white 2xl:text-[20px] font-normal"><a href="#quem-somos">Quem somos</a></li>
            <li class="hidden sm:inline-block hover:border-b-2 hover:border-white-50 2xl:text-[20px] font-normal"><a href="#planos">Planos</a></li>
            <li class="hidden sm:inline-block hover:border-b-2 hover:border-white 2xl:text-[20px] font-normal"><button @click="abrirCadastro">Para empresas</button></li>
            <li>
                <Button label="Acessar" class="bg-gray-50 text-black font-normal h-7 w-20 sm:pl-3 sm:pr-3 shadow-md rounded-lg hover:border hover:border-gray-50 hover:bg-transparent hover:text-gray-50" @click="abrirModal"> Acessar
            </Button>
            </li>
        </ul>
    </nav>
    <div class="select-none fundo text-white pb-20 pt-20" id="quem-somos">
        <section>
            <div class="grid grid-cols-1 justify-items-center mt-8 2xl:mt-20">
                <p class="text-2xl font-semibold opacity-80 md:text-[30px] md:text-center 2xl:text-[40px]/10">Transforme
                    cada minuto em <br>oportunidade com TimeGold.</p>
                <p
                    class="text-[12px] text-center pl-20 pr-20 mt-4 opacity-60 md:text-[14px] md:pl-48 md:pr-48 2xl:pl-20 2xl:pr-20 2xl:max-w-[700px] 2xl:mx-auto 2xl:px-6 2xl:text-[16px]">
                    Organize sua agenda de forma prática, segura e sem conflitos de horários.
                    Nosso sistema conecta profissionais, clientes e administradores em uma plataforma simples e eficiente
                </p>
            </div>

            <div class=" relative flex mt-10">
                <div
                    class="bg-gray-50 w-10 h-10 2xl:w-24 2xl:h-24 2xl:text-[35px] 2xl:pt-5 text-center pt-2 rounded-full absolute right-36 2xl:right-80 -bottom-16 shadow-md">
                    <i class="bi bi-calendar-week-fill text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-10 h-10 2xl:w-20 2xl:h-20 2xl:text-[30px] 2xl:pt-4  text-center pt-2 rounded-full absolute right-40 2xl:right-64 2xl:bottom-40 -bottom-2 shadow-md">
                    <i class="bi bi-clock-fill text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-10 h-10 2xl:w-16 2xl:h-16 2xl:text-[27px] 2xl:pt-2 text-center pt-2 rounded-full absolute right-24 2xl:right-52 2xl:bottom-10 -bottom-2 shadow-md">
                    <i class="bi bi-currency-dollar text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-10 h-10 2xl:w-20 2xl:h-20 2xl:text-[30px] 2xl:pt-4  text-center pt-2 rounded-full absolute right-2 2xl:right-20 bottom-20 shadow-md">
                    <i class="bi bi-clipboard-data-fill text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-12 h-12 2xl:w-16 2xl:h-16 2xl:text-[27px] 2xl:pt-3 text-center pt-2 rounded-full absolute right-40 -bottom-16 shadow-md">
                    <i class="bi bi-check-circle-fill text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-14 h-14 text-center pt-2 rounded-full absolute right-4 bottom-1 2xl:right-10 2xl:-bottom-8 shadow-md">
                    <i class="bi bi-bell-fill text-violet-500 text-[25px]"></i></div>
                <div
                    class="bg-gray-50 w-10 h-10 2xl:w-20 2xl:h-20 2xl:text-[30px] 2xl:pt-4  text-center pt-2 rounded-full absolute right-4 -bottom-16 2xl:right-10 2xl:bottom-48 shadow-md">
                    <i class="bi bi-shield-lock-fill text-violet-500"></i></div>
                <div
                    class="bg-gray-50 w-12 h-12 text-center pt-2 rounded-full absolute right-52 2xl:right-96 2xl:bottom-20 -bottom-16 shadow-md">
                    <i class="bi bi-gear-fill text-violet-500 text-[20px]"></i></div>
            </div>
        </section>
    </div>
    <section >
        <div class="select-none grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-y-10 2xl:pt-20 2xl:pb-20  justify-items-center mt-16">
            <div class="text-center md:text-left ">
                <i class="bi bi-calendar text-violet-700 text-[35px] md:ml-14 2xl:text-[40px] 2xl:pl-6 2xl:pb-10"></i>
                <h1 class=" teste text-purple-800 font-semibold text-[18px] mb-3 md:ml-14 2xl:text-[24px] 2xl:pl-6">Agendamento sem
                    complicação</h1>
                <p class="text-black pl-14 pr-14 font-normal text-[15px] 2xl:text-[18px] 2xl:pl-20">Gerencie horários de
                    forma simples e inteligente, evitando conflitos e garantindo mais organização para profissionais e
                    empresas.</p>
            </div>
            <i class="bi bi-dash-lg text-violet-700 text-[50px] mt-2 md:hidden"></i>
            <div class="text-center md:text-left">
                <i class="bi bi-people-fill text-violet-700 text-[35px] md:ml-14 2xl:text-[40px] 2xl:pl-6 2xl:pb-10"></i>
                <h1 class="text-purple-800 font-semibold text-[18px] mb-3 md:ml-14 2xl:text-[24px] 2xl:pl-6">Comunicação
                    instantânea</h1>
                <p class="text-black pl-14 pr-14 font-normal text-[15px] 2xl:text-[18px] 2xl:pl-20">Confirmações e lembretes
                    enviados automaticamente por e-mail e WhatsApp, trazendo praticidade e confiança para clientes e equipe.
                </p>
            </div>
            <i class="bi bi-dash-lg text-violet-700 text-[50px] mt-2 md:hidden"></i>
            <div class="text-center md:text-left ">
                <i
                    class="bi bi-shield-lock-fill text-violet-700 text-[35px] md:ml-14 2xl:text-[40px] 2xl:pl-6 2xl:pb-10"></i>
                <h1 class="text-purple-800 font-semibold text-[18px] mb-3 md:ml-14 2xl:text-[24px] 2xl:pl-6">Segurança e
                    confiabilidade</h1>
                <p class="text-black pl-14 pr-14 font-normal text-[15px] 2xl:text-[18px] 2xl:pl-20">Proteção total dos
                    dados, acessos personalizados por perfil e uma plataforma estável, ágil e fácil de usar em qualquer
                    dispositivo.</p>
            </div>
        </div>
    </section>

    <a href="https://wa.me/5514996772006?text=Olá%20TimeGold!%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma."
        target="_blank"
        class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50">
        <i class="fab fa-whatsapp text-3xl"></i>
    </a>

    <section id="planos">
        <PlanoComponent />
    </section>
    <br>
    <br>
    <FooterComponent />
    <ModalComponent 
        :visible="mostrarModal"
        :errorMessage="mensagemError" 
        @fechar="fecharModal"
        @login="fazerLogin"
        @limparErro="limparErro"
    />
    <ModalCadastro
        :visible="mostrarCadastro"
        @fechar="fecharCadastro"
        @salvar="cadastrarEmpresa"
        :planos="planos"
    />
    <!-- <FooterComponent /> -->
</template>

<script>

import { ref } from "vue";
import PlanoComponent from '../components/PlanoComponent.vue';
import ModalComponent from "../components/ModalComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import authServices from "../services/authServices";
import cadastroEnterpriseService from "../services/cadastroEnterpriseService";
import Swal from "sweetalert2";
import ModalCadastro from "../components/ModalCadastro.vue";
import { getPlanosRequest } from "../request/planRequest";

export default {
    name: 'Home',
    components: {
        PlanoComponent,
        ModalComponent,
        FooterComponent,
        ModalCadastro
    },

    data() {
        return {
            mostrarModal: false,
            mostrarCadastro: false,
            mensagemError: '',
            planos: []
        }
    },

    async mounted() {
        const response = await getPlanosRequest();
        this.planos = response.data;
        console.log("Planos recebidos na home", this.planos);
    },


    methods: {
        limparErro() {
            this.mensagemError = '';
        },

        abrirModal() {
            this.mostrarModal = true;
            this.mensagemError = '';
        },

        fecharModal() {
            this.mostrarModal = false;
        },

        abrirCadastro() {
            this.mostrarCadastro = true;
        },

        fecharCadastro() {
            this.mostrarCadastro = false;
        },
        
        async fazerLogin({ email, senha}) {
            this.errorMessage = '';

            const { success, user, message } = await authServices.login(email, senha);

            if (!success) {
                this.mensagemError = message;
                return
            }

            localStorage.setItem('user', JSON.stringify(user));

            if (user.type === 1) {
                this.$router.push('/admin');
            } else if (user.type === 2) {
                this.$router.push('/profissional');
            } else {
                this.$router.push('/cliente')
            }

            this.mostrarModal = false;
        },

        async cadastrarEmpresa(dadosForm) {
            const empresaDTO = {
                name: dadosForm.name,
                cnpj: dadosForm.cnpj,
                planId: dadosForm.plano,
                address: {
                    street: dadosForm.street,
                    number: dadosForm.number,
                    city: dadosForm.city,
                    state: dadosForm.state,
                    country: dadosForm.country
                }
            };

            const { success, message } = await cadastroEnterpriseService.cadastrarEmpresa(empresaDTO);

            if (!success) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao cadastrar empresa',
                    text: message,
                    confirmButtonText: 'OK'
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Empresa cadastrada com sucesso!',
                showConfirmButton: false,
                timer: 1500
            });

            this.mostrarCadastro = false;
            this.$router.push('/admin');
        }
    }

}
</script>

<style>
.fundo {
    background: #7038ba;
    background: radial-gradient(circle, rgba(112, 56, 186, 1) 0%, rgba(108, 58, 194, 1) 26%, rgba(49, 14, 94, 1) 100%);
}
</style>