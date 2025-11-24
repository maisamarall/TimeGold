<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        🧾 Editar Profissional
                    </h2>
                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Fechar">
                        &times;
                    </button>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="label">Nome <span class="text-red-500">*</span></label>
                            <input v-model="form.nome" type="text" required class="input" />
                        </div>

                        <div>
                            <label class="label">Email <span class="text-red-500">*</span></label>
                            <input v-model="form.email" type="email" required class="input" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="label">Telefone <span class="text-red-500">*</span></label>
                            <input v-model="form.telefone" type="text" required class="input" />
                        </div>

                        <div>
                            <label class="label">Perfil</label>
                            <select v-model="form.perfil" class="input">
                                <option value="1">Admin</option>
                                <option value="2">Profissional</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="label">Especialidade/Função</label>
                            <input v-model="form.especialidade" type="text" class="input" />
                        </div>

                        <div>
                            <label class="label">Status</label>
                            <select v-model="form.status" class="input">
                                <option value="Ativo">Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-end gap-4 pt-4">
                        <button type="button" @click="$emit('fechar')"
                            class="px-5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 border border-gray-300">
                            Cancelar
                        </button>

                        <button type="submit"
                            class="px-5 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#7021D8] to-[#5013A0] hover:opacity-90">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'EditUserModal',
    props: {
        usuario: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            form: {
                id: this.usuario.id,
                nome: this.usuario.name || '',
                email: this.usuario.email || '',
                telefone: this.usuario.phone || '',
                perfil: this.usuario.type || 2,
                especialidade: this.usuario.function || '',
                status: this.usuario.active ? 'Ativo' : 'Inativo'
            }
        }
    },

    methods: {
        handleSubmit() {
            const payload = {
                id: this.form.id,
                name: this.form.nome,
                email: this.form.email,
                phone: this.form.telefone,
                type: Number(this.form.perfil),
                function: this.form.especialidade,
                active: this.form.status === 'Ativo'
            }

            this.$emit('salvar', payload)
        }

    }
}
</script>


<style scoped>
.input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #374151;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s;
}

.input:focus {
    border-color: #7021D8;
    box-shadow: 0 0 0 2px rgba(112, 33, 216, 0.2);
}

.label {
    display: block;
    font-weight: 500;
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 0.25rem;
}

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
