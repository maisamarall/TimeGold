
<template>
    <div class="card">
       
        <Dialog v-model:visible="visible" :position="position" header="Edit Profile" :style="{ width: '25rem' }" :modal="true" :draggable="false">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Insira seus dados</span>
            <div class="flex flex-col gap-2">
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" />
                    <label for="on_label">E-mail</label>
                </FloatLabel>
            </div>
            <div class="flex flex-col gap-2 mt-5">
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" />
                    <label for="on_label">Senha</label>
                </FloatLabel>
            </div>


            <div class="flex justify-end gap-2">
                <Button type="button" label="Fechar" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Entrar"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Button, FloatLabel } from "primevue";
import {Dialog} from "primevue";
import { InputText } from 'primevue';

const dados = ref([]);

const visible = ref(false);
const position = ref('center');

function open(pos = 'center') {
  position.value = pos;
  visible.value = true;
}

defineExpose({ open });
</script>
