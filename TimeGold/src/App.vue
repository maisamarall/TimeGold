<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('App montado com sucesso')
})
</script>

<template>
    <router-view />
</template>
