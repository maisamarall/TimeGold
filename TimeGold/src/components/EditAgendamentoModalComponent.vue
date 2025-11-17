<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        📆 Editar Agendamento
                    </h2>
                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Fechar">
                        &times;
                    </button>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <label class="label">Paciente:</label>
                            <input v-model="form.paciente" type="text" class="input" required />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="label">Data:</label>
                            <input v-model="form.data" type="date" class="input" required />
                        </div>

                        <div>
                            <label class="label">Horário:</label>
                            <input v-model="form.hora" type="time" class="input" required />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="label">Procedimento:</label>
                            <input v-model="form.procedimento" type="text" class="input" required />
                        </div>

                        <div>
                            <label class="label">Status:</label>
                            <select v-model="form.status" class="input">
                                <option value="Pendente" class="bg-red-100 text-red-700 font-bold">Pendente</option>
                                <option value="Em andamento" class="bg-yellow-100 text-yellow-700 font-bold">Em andamento</option>
                                <option value="Concluído" class="bg-green-100 text-green-700 font-bold">Concluído</option>
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
    name: 'EditAgendamentoModalComponent',
    props: {
        agendamento: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: {
                paciente: this.agendamento.paciente || '',
                data: this.agendamento.data || '',
                hora: this.agendamento.hora || '',
                procedimento: this.agendamento.procedimento || '',
                status: this.agendamento.status || 'Pendente'
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('salvar', { ...this.form, id: this.agendamento.id })
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