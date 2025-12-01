<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6">
        <transition name="fade-scale">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-semibold text-gray-700">
                        ✨ Cadastrar Novo Procedimento
                    </h2>
                    <button @click="$emit('fechar')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Fechar" :disabled="isLoading">
                        &times;
                    </button>
                </div>

                <!-- Melhorar exibição de erros e validações -->
                <form @submit.prevent="salvarTipoAgendamento" class="space-y-4">

                    <!-- Exibição de Erros da API -->
                    <div v-if="apiErrors.length > 0"
                        class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        <p class="font-bold mb-2">Erro(s) de Validação:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li v-for="(error, index) in apiErrors" :key="index">
                                <strong v-if="error.field">{{ error.field }}:</strong>
                                {{ error.message }}
                            </li>
                        </ul>
                    </div>

                    <!-- Campo: Nome do Procedimento -->
                    <div>
                        <label for="name" class="label">Nome do Procedimento:</label>
                        <input id="name" v-model="form.name" type="text" class="input" required
                            placeholder="Ex: Limpeza nos dentes" :disabled="isLoading" />
                    </div>

                    <!-- Campo: Descrição -->
                    <div>
                        <label for="description" class="label">Descrição:</label>
                        <textarea id="description" v-model="form.description" class="input" rows="3" required
                            placeholder="Detalhes sobre o procedimento e seus benefícios."
                            :disabled="isLoading"></textarea>
                    </div>

                    <!-- Campo: Valor -->
                    <div>
                        <label for="value" class="label">Valor (R$):</label>
                        <input id="value" v-model.number="form.value" type="number" step="0.01" min="0.01" class="input"
                            required :disabled="isLoading" />
                    </div>

                    <!-- Enterprise ID (Hidden) -->
                    <input type="hidden" v-model.number="form.enterpriseId" />

                    <!-- Botões de Ação -->
                    <div class="pt-4 flex justify-end gap-2">
                        <button type="button" @click="$emit('fechar')" :disabled="isLoading"
                            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed">
                            Cancelar
                        </button>
                        <button type="submit" :disabled="isLoading"
                            class="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-150 shadow-md disabled:bg-purple-400 disabled:cursor-not-allowed">
                            {{ isLoading ? 'Salvando...' : 'Salvar Procedimento' }}
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { schedulingTypeService } from '../services/schedulingTypeService';

export default {
    name: 'SchedulingTypeFormModal',
    props: {
        enterpriseId: {
            type: Number,
            default: null
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
                enterpriseId: null,
            }
        }
    },
    mounted() {
        // ✅ Obter do localStorage se não vier por prop
        this.form.enterpriseId = this.enterpriseId ||
            parseInt(localStorage.getItem('enterpriseId')) ||
            parseInt(localStorage.getItem('user_enterpriseId')) ||
            1
    },
    watch: {
        enterpriseId(newId) {
            if (newId) {
                this.form.enterpriseId = newId;
            }
        }
    },
    methods: {
        async salvarTipoAgendamento() {
            if (!this.validarFormulario()) {
                return;
            }

            this.apiErrors = [];
            this.isLoading = true;

            try {
                const payload = {
                    name: this.form.name.trim(),
                    description: this.form.description.trim(),
                    value: parseFloat(this.form.value),
                    enterpriseId: this.form.enterpriseId,
                };

                console.log('[SchedulingTypeFormModal] Enviando payload:', payload);

                await schedulingTypeService.criarTipoAgendamento(payload);

                // ✅ Emitir eventos de sucesso
                this.$emit('salvo');
                this.$emit('fechar');

            } catch (error) {
                console.error('[SchedulingTypeFormModal] Erro:', error);

                // Tratamento de erros da API
                if (Array.isArray(error)) {
                    this.apiErrors = error;
                } else if (error && typeof error === 'object' && error.message) {
                    this.apiErrors = [{
                        message: error.message,
                        field: error.field || 'Sistema'
                    }];
                } else {
                    this.apiErrors = [{
                        message: 'Erro inesperado ao salvar o Tipo de Agendamento.',
                        field: 'Sistema'
                    }];
                }
            } finally {
                this.isLoading = false;
            }
        },

        validarFormulario() {
            this.apiErrors = [];

            if (!this.form.name || this.form.name.trim().length < 3) {
                this.apiErrors.push({
                    field: 'Nome',
                    message: 'O nome deve ter no mínimo 3 caracteres'
                });
            }

            if (!this.form.description || this.form.description.trim().length < 3) {
                this.apiErrors.push({
                    field: 'Descrição',
                    message: 'A descrição deve ter no mínimo 3 caracteres'
                });
            }

            if (!this.form.value || this.form.value <= 0) {
                this.apiErrors.push({
                    field: 'Valor',
                    message: 'O valor deve ser maior que zero'
                });
            }

            // ✅ Validação melhorada
            if (!this.form.enterpriseId || this.form.enterpriseId <= 0) {
                this.apiErrors.push({
                    field: 'Empresa',
                    message: 'ID da empresa é obrigatório e deve ser válido'
                });
            }

            return this.apiErrors.length === 0;
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

.input:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
}

.label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #4b5563;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.3s ease;
}

.fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.95);
}

.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.animate-fade-in {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>