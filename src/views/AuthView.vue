<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 p-4">
    <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-6 text-center text-2xl font-bold text-gray-800">
        {{ isLogin ? 'Connexion' : 'Inscription' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            minlength="6"
            class="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <!-- Erreur -->
        <div v-if="authStore.error" class="rounded bg-red-50 p-2 text-sm text-red-700">
          {{ authStore.error }}
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="authStore.loading"
          class="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {{ authStore.loading ? 'Chargement...' : (isLogin ? 'Se connecter' : 'S’inscrire') }}
        </button>
      </form>

      <!-- Google Login -->
      <div class="mt-4 flex items-center justify-center">
        <button
          @click="loginWithGoogle"
          :disabled="authStore.loading"
          class="flex items-center gap-2 rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-60"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" class="h-5" />
          Continuer avec Google
        </button>
      </div>

      <!-- Toggle -->
      <p class="mt-4 text-center text-sm text-gray-600">
        {{ isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?" }}
        <button
          @click="isLogin = !isLogin"
          class="font-medium text-blue-600 hover:underline"
        >
          {{ isLogin ? "S’inscrire" : "Se connecter" }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const isLogin = ref(true)
const form = ref({ email: '', password: '' })

const handleSubmit = async () => {
  if (isLogin.value) {
    await authStore.login(form.value.email, form.value.password)
  } else {
    await authStore.register(form.value.email, form.value.password)
  }
  if (authStore.user) router.push('/dashboard')
}

const loginWithGoogle = async () => {
  await authStore.loginWithGoogle()
  if (authStore.user) router.push('/dashboard')
}
</script>