<template>

    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div class=" max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-2xl w-full max-w-3xl p-8 animate-fade-in">

            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-semibold text-gray-700">🧾 Cadastrar Profissional</h2>
                <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>

            <form @submit.prevent="salvar" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="label">Nome *</label>
                        <input v-model="form.name" class="input" type="text" required />
                    </div>

                    <div>
                        <label class="label">Email *</label>
                        <input v-model="form.email" class="input" type="email" required />
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="label">Telefone *</label>
                        <input v-model="form.phone" class="input" type="text" required />
                    </div>

                    <div>
                        <label class="label">Perfil *</label>
                        <select v-model="form.type" class="input">
                            <option value="1">Admin</option>
                            <option value="2">Profissional</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="label">Especialidade / Função *</label>
                        <input v-model="form.function" class="input" type="text" required />
                    </div>

                    <div>
                        <label class="label">CRO *</label>
                        <input v-model="form.cro" class="input" type="text" required />
                    </div>
                </div>

                <div>
                    <label class="label">Tempo de atuação *</label>
                    <input v-model="form.actuationTime" class="input" type="text" required />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="label">CPF *</label>
                        <input v-model="form.cpf" class="input" type="text" required />
                    </div>

                    <div>
                        <label class="label">Status *</label>
                        <select v-model="form.active" class="input">
                            <option :value="true">Ativo</option>
                            <option :value="false">Inativo</option>
                        </select>
                    </div>
                </div>


                <div>
                    <label class="label">Sobre *</label>
                    <textarea v-model="form.about" class="input h-24"></textarea>
                </div>

                <div>
                    <label class="label">Senha *</label>
                    <input v-model="form.password" class="input" type="password" required />
                </div>

                <div class="flex justify-end gap-4 pt-4">
                    <button type="button" @click="$emit('close')" class="btn-cancel">Cancelar</button>
                    <button type="submit" class="btn-save">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompleteProfessionalModal",
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                type: 0,
                function: "",
                cro: "",
                actuationTime: "",
                cpf: "",
                about: "",
                password: "",
                enterpriseId: 1,
                active: true,
            },
        };
    },
    methods: {
        salvar() {
            this.$emit("save", this.form);
        },
    },
};
</script>

<style scoped>
.input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #374151;
    background-color: white;
    outline: none;
    transition: border 0.2s;
}

.input:focus {
    border-color: #7021d8;
    box-shadow: 0 0 0 2px rgba(112, 33, 216, 0.2);
}

.label {
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    display: block;
    color: #4b5563;
}

.btn-save {
    padding: 0.6rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    background: linear-gradient(to right, #7021d8, #5013a0);
}

.btn-cancel {
    padding: 0.6rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    color: #555;
}
</style>
