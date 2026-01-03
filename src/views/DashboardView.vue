<script setup>
import { ref, watch, onUnmounted, nextTick } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useProjectStore } from '@/stores/projectStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const projectStore = useProjectStore()
const router = useRouter()

let unsubscribe = null
const titleInput = ref(null)

// Écoute de l'utilisateur connecté et chargement de ses projets
watch(() => authStore.user, (user) => {
  if (user) {
    unsubscribe = projectStore.subscribeToProjects(user.uid)
  }
}, { immediate: true })

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

// Création de projet
const newProject = ref({ title: '', description: '', color: '#3b82f6' })
const isModalOpen = ref(false)
const editingProject = ref(null)

const openModal = (project = null) => {
  if (project) {
    editingProject.value = project
    newProject.value = { ...project }
  } else {
    editingProject.value = null
    newProject.value = { title: '', description: '', color: '#3b82f6' }
  }
  isModalOpen.value = true
  
  // Focus après ouverture de la modale
  nextTick(() => {
    titleInput.value?.focus()
  })
}

const saveProject = async () => {
  if (!newProject.value.title?.trim()) return
  
  if (editingProject.value) {
    await projectStore.updateProject(editingProject.value.id, newProject.value)
  } else {
    await projectStore.createProject(authStore.user.uid, newProject.value)
  }
  isModalOpen.value = false
}

const goToProject = (projectId) => {
  router.push(`/project/${projectId}`)
}

const deleteProject = async (projectId, event) => {
  event.stopPropagation()
  if (confirm('Supprimer ce projet et toutes ses tâches ?')) {
    await projectStore.deleteProject(projectId)
  }
}

const editProject = (project, event) => {
  event.stopPropagation()
  openModal(project)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Mes Projets</h1>
            <p class="text-gray-600 mt-1">
              {{ projectStore.projects.length }} projet{{ projectStore.projects.length > 1 ? 's' : '' }}
            </p>
          </div>
          <button
            @click="openModal()"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Nouveau projet
          </button>
        </div>
      </div>


      <!-- Projects Grid -->
      <div v-if="projectStore.projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projectStore.projects"
          :key="project.id"
          @click="goToProject(project.id)"
          class="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200"
        >
          <!-- Barre de couleur -->
          <div 
            class="h-2 w-full"
            :style="{ backgroundColor: project.color || '#3b82f6' }"
          ></div>
          
          <!-- Contenu -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {{ project.title }}
              </h3>
              <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <button
                  @click="editProject(project, $event)"
                  class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                  title="Modifier"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  @click="deleteProject(project.id, $event)"
                  class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition"
                  title="Supprimer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p class="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
              {{ project.description || 'Aucune description' }}
            </p>

            <div class="flex items-center gap-2 text-xs text-gray-500">
              <div class="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Voir les tâches</span>
              </div>
            </div>
          </div>

          <!-- Hover effect -->
          <div class="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Aucun projet pour le moment</h3>
        <p class="text-gray-600 mb-6">Créez votre premier projet pour commencer à organiser vos tâches</p>
        <button
          @click="openModal()"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Créer un projet
        </button>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="isModalOpen = false"
      >
        <div class="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 transform transition-all">
          <h3 class="text-xl font-bold text-gray-900 mb-5">
            {{ editingProject ? 'Modifier le projet' : 'Nouveau projet' }}
          </h3>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nom du projet <span class="text-red-500">*</span>
              </label>
              <input
                v-model="newProject.title"
                placeholder="Ex: Site web e-commerce"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                ref="titleInput"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                v-model="newProject.description"
                placeholder="Décrivez votre projet..."
                rows="3"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Couleur</label>
              <div class="flex items-center gap-3">
                <input
                  v-model="newProject.color"
                  type="color"
                  class="h-10 w-20 cursor-pointer rounded border border-gray-300"
                />
                <span class="text-sm text-gray-600">{{ newProject.color }}</span>
              </div>
            </div>
          </div>

          <div class="flex gap-3 mt-6">
            <button
              @click="isModalOpen = false"
              class="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Annuler
            </button>
            <button
              @click="saveProject"
              :disabled="!newProject.title?.trim()"
              class="flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {{ editingProject ? 'Modifier' : 'Créer' }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>