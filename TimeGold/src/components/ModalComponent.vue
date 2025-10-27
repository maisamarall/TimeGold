
<template>
    <div class="card">
        <Dialog v-model:visible="visible"
                :position="position"
                header="Acessar"
                :style="{ width: '25rem', backgroundColor: '#fff', color:'#7021D8'}" :modal="true" :draggable="false" >
            <span class="text-surface-500 dark:text-surface-400 block mb-8 text-violet-800 font-medium">Insira seus dados</span>
            <div class="flex flex-col gap-2">
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" :style="{backgroundColor: '#fff', border:'2px solid #7021D8', borderBottom:'2px solid #7021D8', borderRadius:'10', boxShadow:'none',  transition:'all 0.2s ease-in-out'}"/>
                    <label for="on_label" :style="{backgroundColor: '#fff', color:'#7021D8'}">E-mail</label>
                </FloatLabel>
            </div>
            <div class="flex flex-col gap-2 mt-5">
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" :style="{backgroundColor: '#fff', border:'2px solid #7021D8', borderBottom:'2px solid #7021D8', borderRadius:'10', boxShadow:'none',  transition:'all 0.2s ease-in-out'}" />
                    <label for="on_label" :style="{backgroundColor: '#fff', color:'#7021D8'}">Senha</label>
                </FloatLabel>
            </div>


            <div class="flex justify-end gap-2">
                <Button type="button" label="Fechar" severity="secondary" @click="visible = false" :style="{marginTop:'50px', backgroundColor:'#7021D8', border:'none', color:'#fff'}"></Button>
                <Button type="button" label="Entrar" :style="{marginTop:'50px', backgroundColor:'#7021D8', border:'none', color:'#fff'}"></Button>
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
