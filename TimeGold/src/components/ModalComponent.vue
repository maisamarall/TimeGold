<template>
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in">

                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700 ml-5">
                        Acessar
                    </h2>

                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Fechar">
                        &times;
                    </button>
                </div>

                <form @submit.prevent="emitirLogin" class="space-y-2 p-5">
                    <div v-if="errorMessage" class="p-3 mb-4 rounded-lg border border-red-300 bg-red-50 text-red-700 text-sm flex items-start gap animate-fade-in">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="w-5 h-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 4a8 8 0 100 16 8 8 0 000-16z" />
                        </svg>
                        <span>{{ errorMessage }}</span>
                    </div>

                    <div class="mb-5 grid grid-cols-1">
                        <label class="label text-gray-700 mb-3">Email</label>
                        <input v-model="form.email" type="email" required @input="limparErro" class="bg-transparent border-b border-violet-600 focus:outline-none focus:border-violet-400 text-gray-600" />
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="label text-gray-700 mb-3">Senha</label>
                        <input v-model="form.senha" type="password" required @input="limparErro" class="bg-transparent border-b border-violet-600 focus:outline-none focus:border-violet-400 text-gray-600" />
                    </div>

                    <div class="flex justify-end">
                        <button type="button" class="text-sm text-purple-600 hover:underline mt-2">
                            Esqueceu a senha?
                        </button>
                    </div>

                    <!-- Botão -->
                    <div class="flex justify-end">
                        <button type="submit"
                            class="px-6 py-2 mt-2 rounded-lg font-medium text-white bg-violet-700 hover:bg-transparent hover:border hover:border-violet-700 hover:text-violet-700 shadow-md">
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>

    

</template>


<script>

export default {
    name: 'LoginModal',
    props: {
        visible: Boolean,
        errorMessage: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            form: {
                email: '',
                senha: ''
            }
        }
    },
    methods: {
        emitirLogin() {
            this.$emit('login', { ...this.form })
            this.resetarForm()
        },

        limparErro() {
            this.$emit('limparErro')
        },

        resetarForm() {
            this.form = {
                email: '',
                senha: ''
            }
        }
    }

}
</script>

<style scoped>

@keyframes fade-in {
    from {opacity: 0; transform: translateY(-4px);}
    to {opacity: 1; transform: translateY(0);}
}

.animate-fade-in {
    animation: fade-in 0.2s ease-out;
}

/* Animação */
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

