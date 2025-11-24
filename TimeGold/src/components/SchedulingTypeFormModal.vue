<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        ✨ Cadastrar Novo Procedimento
                    </h2>
                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Fechar"> &times; </button>
                </div>

                <form @submit.prevent="salvarTipoAgendamento" class="space-y-4">
                    
                    <div v-if="apiErrors.length" class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p class="font-bold">Erro(s) de Validação:</p>
                        <ul class="list-disc list-inside mt-1">
                            <li v-for="(error, index) in apiErrors" :key="index">
                                **{{ error.field || 'Sistema' }}**: {{ error.message }}
                            </li>
                        </ul>
                    </div>

                    <div>
                        <label class="label">Nome do Procedimento:</label>
                        <input v-model="form.name" type="text" class="input" required 
                               placeholder="Ex: Limpeza nos dentes"/>
                    </div>
                    
                    <div>
                        <label class="label">Descrição:</label>
                        <textarea v-model="form.description" class="input" rows="3" required 
                                  placeholder="Detalhes sobre o procedimento e seus benefícios."></textarea>
                    </div>

                    <div>
                        <label class="label">Valor (R$):</label>
                        <input v-model.number="form.value" type="number" step="0.01" min="0.01" class="input" required />
                    </div>
                    
                    <input type="hidden" v-model.number="form.enterpriseId" />

                    <div class="pt-4 flex justify-end">
                        <button type="submit" :disabled="isLoading"
                            class="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md disabled:bg-purple-400">
                            {{ isLoading ? 'Salvando...' : 'Salvar Procedimento' }}
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { schedulingTypeService } from '@/services/schedulingTypeService';

export default {
    name: 'SchedulingTypeFormModal',
    props: {
        enterpriseId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isLoading: false,
            apiErrors: [],
            form: {
                name: '',
                description: '',
                value: 0.00,
                enterpriseId: this.enterpriseId, 
            }
        }
    },
    watch: {
        enterpriseId(newId) {
            this.form.enterpriseId = newId;
        }
    },
    methods: {
        async salvarTipoAgendamento() {
            this.apiErrors = [];
            this.isLoading = true;

            const payload = {
                ...this.form,
            };

            try {
                await schedulingTypeService.criarTipoAgendamento(payload);
                
                this.$emit('salvo');
                this.$emit('fechar');

            } catch (error) {
                if (Array.isArray(error) && error.every(e => e.message)) {
                    this.apiErrors = error;
                } else {
                    this.apiErrors = [{ message: 'Erro inesperado ao salvar o Tipo de Agendamento.', field: 'Sistema' }];
                    console.error('Erro de API:', error);
                }
            } finally {
                this.isLoading = false;
            }
        },
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
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #4b5563;
}
</style>