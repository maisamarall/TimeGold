<template>
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-7 relative  animate-fade-in">

                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-600">
                        Cadastre sua empresa
                    </h2>

                    <button @click="$emit('fechar')" 
                            class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                            aria-label="Fechar">
                        &times;
                    </button>
                </div>

                <form @submit.prevent="emitirSalvar" class="mt-10">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="grid grid-cols-1">
                            <label class="text-base text-gray-600 mb-2 font-semibold">Nome</label>
                            <input v-model="form.name" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                        </div>
                        <div class="grid grid-cols-1">
                            <label class="text-base text-gray-600 mb-2 font-semibold">Cnpj</label>
                            <input v-model="form.cnpj" type="text" placeholder="XX.XXX.XXX/XXXX-XX" class="p-2 bg-transparent rounded-md text-gray-500 text-[14px] font-semibold pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                        </div>

                        <div class="grid grid-cols-1">
                            <label class="text-base text-gray-600 mb-2 font-semibold">Escolha um plano</label>
                            <select v-model="form.status" class="bg-transparent text-gray-600 border border-gray-400 p-2 rounded-md focus:outline-none">
                                <option value="1">Plano Básico</option>
                                <option value="2">Plano Profissional</option>
                                <option value="3">Plano Personalizado</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h1 class="text-[17px] text-gray-600 font-medium mb-5">Endereço</h1>
                        <div class="grid grid-cols-2 gap-5">
                            <div class="grid grid-cols-1">
                                <label class="text-base text-gray-600 mb-2 font-semibold mb-2">Rua</label>
                                <input v-model="form.street" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                            </div>
                            <div class="grid grid-cols-1">
                                <label class="text-base text-gray-600 mb-2 font-semibold mb-2">Nº</label>
                                <input v-model="form.number" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                            </div>
                            <div class="grid grid-cols-1">
                                <label class="text-base text-gray-600 mb-2 font-semibold mb-2">Cidade</label>
                                <input v-model="form.city" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                            </div>
                            <div class="grid grid-cols-1">
                                <label class="text-base text-gray-600 mb-2 font-semibold mb-2">Estado</label>
                                <input v-model="form.state" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                            </div>
                            <div class="grid grid-cols-1">
                                <label class="text-base text-gray-600 mb-2 font-semibold mb-2">País</label>
                                <input v-model="form.country" type="text" class="p-2 bg-transparent rounded-md text-gray-600 text-[14px] pl-2 border border-gray-400 focus:outline-none focus:border-2 focus:border-violet-400" required>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="px-6 py-2 rounded-lg text-base font-medium text-white bg-violet-700 hover:bg-transparent hover:border hover:border-violet-700 hover:text-violet-700 mt-10">
                        Salvar
                    </button>
                </form>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CadastroModal',
    props: {
        visible: Boolean
    },

    data() {
        return {
            form: {
                name: '',
                cnpj: '',
                plano: '',
                street: '',
                number: '',
                city: '',
                state: '',
                country: '',
            }
        }
    },

    methods: {
        emitirSalvar() {
            this.$emit('salvar', { ...this.form })
            alert('Usuário cadastrado com sucesso!')
            this.resetarForm()
        },
        resetarForm() {
            this.form = {
                name: '',
                cnpj: '',
                plano: '',
                street: '',
                number: '',
                city: '',
                state: '',
                country: '',
            }
        }
    }
} 
</script>

<style scoped>

.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.2s ease-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>