import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/project/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation Guard avec vérification d'initialisation Firebase
let isAuthReady = false

// Attendre que Firebase soit initialisé
auth.onAuthStateChanged(() => {
  isAuthReady = true
})

router.beforeEach(async (to, from, next) => {
  // Attendre que Firebase soit prêt (une seule fois au démarrage)
  if (!isAuthReady) {
    await new Promise(resolve => {
      const unsubscribe = auth.onAuthStateChanged(() => {
        unsubscribe()
        resolve()
      })
    })
  }

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/auth')
  } else if (to.path === '/auth' && currentUser) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router