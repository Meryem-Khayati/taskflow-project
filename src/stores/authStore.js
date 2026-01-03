import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  //  État
  const user = ref(auth.currentUser)
  const loading = ref(false)
  const error = ref(null) 

  //  Getters
  const isAuthenticated = computed(() => !!user.value)

  //  Actions

  const register = async (email, password) => {
    loading.value = true
    error.value = null
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (e) {
      error.value = "Erreur d'inscription. Vérifiez vos données."
      console.error('[Auth] Register error:', e)
    } finally {
      loading.value = false
    }
  }

  const login = async (email, password) => {
    loading.value = true
    error.value = null
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (e) {
      error.value = "Email ou mot de passe incorrect."
      console.error('[Auth] Login error:', e)
    } finally {
      loading.value = false
    }
  }

  const loginWithGoogle = async () => {
    loading.value = true
    error.value = null
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
    } catch (e) {
      error.value = "Échec de la connexion Google."
      console.error('[Auth] Google login error:', e)
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    loading.value = true
    try {
      await signOut(auth)
      user.value = null
    } catch (e) {
      error.value = "Déconnexion impossible."
      console.error('[Auth] Logout error:', e)
    } finally {
      loading.value = false
    }
  }

  // Initialisation de l'écouteur 
  const initAuthListener = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
      loading.value = false
    })
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    loginWithGoogle,
    logout,
    initAuthListener
  }
})