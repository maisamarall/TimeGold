<template>

  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-purple-100">
        <!-- <img class="mx-auto mb-8 w-20 h-70 rounded-full" src="../assets/logoNav.jpeg" alt=""> -->
      <h2 class="text-2xl font-bold text-center text-purple-800 mb-6">Cadastro Usuários</h2>

      <form class="space-y-5 ">
        <!-- Nome -->   
        <div class="flex items-center border rounded-lg px-3 py-2">
          <i class="pi pi-user text-gray-500 mr-2"></i>
          <input type="text" placeholder="Nome Completo" class="w-full outline-none text-gray-700"/>
        </div>

        <!-- E-mail -->
        <div class="flex items-center border rounded-lg px-3 py-2">
          <i class="pi pi-envelope text-gray-500 mr-2"></i>
          <input type="email" placeholder="E-mail" class="w-full outline-none text-gray-700"/>
        </div>

        <!-- Telefone -->
        <div class="flex items-center border rounded-lg px-3 py-2">
          <i class="pi pi-phone text-gray-500 mr-2"></i>
          <input type="tel" placeholder="Telefone" class="w-full outline-none text-gray-700"/>
        </div>

        <!-- Perfil -->
        <select class="w-full border rounded-lg px-3 py-2 text-gray-700">
          <option>Perfil</option>
          <option>Administrador</option>
          <option>Usuário</option>
        </select>

        <!-- Especialidade -->
        <select class="w-full border rounded-lg px-3 py-2 text-gray-700">
          <option>Especialidade</option>
          <option>Odontologia</option>
          <option>Dermatologia</option>
          <option>Clínico Geral</option>
        </select>

        <!-- Senha -->
        <div class="flex items-center border rounded-lg px-3 py-2 justify-between">
          <input type="password" placeholder="Senha" class="w-full outline-none text-gray-700" />
          <button type="button" class="text-sm text-purple-700 hover:text-purple-900 ml-2"> Gerar </button>
        </div>

        <!-- Status -->
        <div class="flex items-center justify-start space-x-4 mt-3">
          <label class="flex items-center text-gray-700">
            <input type="radio" name="status" value="ativo" checked class="text-purple-700 focus:ring-purple-700"/>
            <span class="ml-2">Ativo</span>
          </label>
          <label class="flex items-center text-gray-700">
            <input type="radio" name="status" value="inativo" class="text-purple-700 focus:ring-purple-700"/>
            <span class="ml-2">Inativo</span>
          </label>
        </div>

        <!-- Botões -->
        <div class="flex justify-end space-x-3 mt-6">
          <button type="submit" class="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg font-semibold"> Salvar </button>
          <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg"> Cancelar </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// agnt futuramente pode adicionar funções de salvar e gerar senha aqui
</script>

<style scoped>
/* borda azul*/
div.bg-white {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
}
</style>
