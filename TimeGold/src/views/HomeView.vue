<template>

    <div class="bg-gradient-to-r from-[#7021D8] to-[#5013A0] text-white">
        <div class="grid grid-cols-2 gap-100 justify-items-center pt-5">
            <h1 class="text-2xl font-medium -ml-40">TimeGold</h1>
            <div class="flex gap-10 text-lg">
                <h1>Quem somos</h1>
                <h1>Planos</h1>

                <Button label="Acessar"
                    class="bg-gray-50 text-black pl-3 pr-3 rounded-lg hover:border hover:border-gray-50 hover:bg-transparent hover:text-gray-50"
                    @click="openPosition('topright')" severity="secondary" style="min-width: 10rem">Acessar</Button>

            </div>
        </div>

        <div class="justify-items-center mt-30">
            <h1 class=" text-[45px] opacity-90 font-semibold text-center">
                Transforme cada minuto em <br>oportunidade com TimeGold.
            </h1>
            <p class="text-base opacity-60 text-center mt-5 pb-25">
                Organize sua agenda de forma prática, segura e sem conflitos de horários.
                <br>Nosso sistema conecta profissionais, clientes e administradores em uma <br>plataforma simples e
                eficiente
            </p>
        </div>
    </div>

    <ModalComponent ref="modalRef"></ModalComponent>
</template>

<script setup>

import { ref } from "vue";
import ModalComponent from "../components/ModalComponent.vue";

const modalRef = ref();

function openPosition(pos) {
  modalRef.value?.open(pos);
}

</script>