<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import AppNavbar from '@/components/AppNavbar.vue'

const authStore = useAuthStore()
const isAuthLoading = ref(true)

onMounted(async () => {
  // Initialiser l'écouteur et attendre la première vérification
  await new Promise(resolve => {
    authStore.initAuthListener()
    // Attendre que Firebase vérifie la session
    setTimeout(resolve, 100)
  })
  isAuthLoading.value = false
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <div v-if="isAuthLoading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p class="mt-2 text-gray-600">Chargement...</p>
      </div>
    </div>
    
    <template v-else>
      <AppNavbar />
      <RouterView />
    </template>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}
</style>