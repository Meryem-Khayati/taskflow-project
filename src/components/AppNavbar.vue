<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const router = useRouter()

const user = computed(() => authStore.user)

const handleLogout = async () => {
  try {
    await authStore.logout()
    router.push('/auth') 
  } catch (e) {
    console.error('Déconnexion échouée', e)
  }
}

// Raccourci email 
const displayName = computed(() => {
  return user.value?.email || ''
})
</script>

<template>
  <nav class="bg-white border-b border-gray-200 px-3 md:px-5 py-2">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <!-- Logo / Titre -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-bold text-lg text-gray-800 hover:text-blue-600 transition"
      >
        <span>TaskFlow</span>
      </RouterLink>

      <!-- Menu droit -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Utilisateur connecté -->
        <div v-if="user" class="hidden sm:flex items-center gap-2 text-sm text-gray-700">
          <span class="font-medium">{{ displayName }}</span>
          <div class="w-1 h-1 rounded-full bg-gray-400 mx-1"></div>
          <RouterLink
            to="/dashboard"
            class="px-2.5 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
          >
            Tableau de bord
          </RouterLink>
        </div>

        <!-- Boutons d'action -->
        <div class="flex items-center gap-1">
          <RouterLink
            v-if="!user"
            to="/auth"
            class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 rounded transition"
          >
            Connexion
          </RouterLink>

          <button
            v-if="user"
            @click="handleLogout"
            class="px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  nav {
    padding: 0.6rem 0.75rem;
  }
  nav a, nav button {
    padding: 0.4rem 0.75rem !important;
    font-size: 0.875rem;
  }
}
</style>