<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'
import TaskCard from '@/components/TaskCard.vue'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()

const projectId = route.params.id
const showTaskModal = ref(false)
const editingTask = ref(null)
const newTask = ref({ title: '', description: '', dueDate: '', status: 'todo' })
const unsubscribeTasks = ref(null)
const unsubscribeProject = ref(null)
const taskTitleInput = ref(null)

const columns = [
  { id: 'todo', label: 'À faire', color: 'bg-gray-50', borderColor: 'border-gray-200' },
  { id: 'doing', label: 'En cours', color: 'bg-blue-50', borderColor: 'border-blue-200'},
  { id: 'done', label: 'Terminé', color: 'bg-green-50', borderColor: 'border-green-200' }
]

// Charger le projet et ses tâches 
onMounted(async () => {
  // Utiliser le listener temps réel pour le projet
  unsubscribeProject.value = projectStore.subscribeToCurrentProject(projectId)
  
  // Souscrire aux tâches
  unsubscribeTasks.value = projectStore.subscribeToTasks(projectId)
})

onUnmounted(() => {
  if (unsubscribeTasks.value) unsubscribeTasks.value()
  if (unsubscribeProject.value) unsubscribeProject.value()
  projectStore.clearCurrentProject()
})

const currentProject = computed(() => projectStore.currentProject)
const isLoading = computed(() => projectStore.loading)

const tasksByStatus = computed(() => {
  return columns.reduce((acc, col) => {
    acc[col.id] = projectStore.tasks.filter(t => t.status === col.id)
    return acc
  }, {})
})

// Ouvrir modal pour ajouter OU éditer
const openAddTask = (status) => {
  editingTask.value = null
  newTask.value = { title: '', description: '', dueDate: '', status }
  showTaskModal.value = true
  
  nextTick(() => {
    taskTitleInput.value?.focus()
  })
}

const openEditTask = (task) => {
  editingTask.value = task
  newTask.value = { 
    title: task.title, 
    description: task.description || '', 
    dueDate: task.dueDate || '', 
    status: task.status 
  }
  showTaskModal.value = true
  
  nextTick(() => {
    taskTitleInput.value?.focus()
  })
}

const saveTask = async () => {
  if (!newTask.value.title.trim()) return
  
  if (editingTask.value) {
    // Modification
    await projectStore.updateTask(projectId, editingTask.value.id, newTask.value)
  } else {
    // Création
    await projectStore.addTask(projectId, newTask.value)
  }
  
  showTaskModal.value = false
  editingTask.value = null
}

const updateTask = (taskId, data) => {
  projectStore.updateTask(projectId, taskId, data)
}

const deleteTask = (taskId) => {
  if (confirm('Supprimer cette tâche ?')) {
    projectStore.deleteTask(projectId, taskId)
  }
}

// DRAG & DROP HANDLERS
const draggedOverColumn = ref(null)

const onDragOver = (e, columnId) => {
  e.preventDefault()
  draggedOverColumn.value = columnId
}

const onDragLeave = () => {
  draggedOverColumn.value = null
}

const onDrop = async (e, targetStatus) => {
  e.preventDefault()
  draggedOverColumn.value = null
  
  const taskId = e.dataTransfer.getData('taskId')
  const currentStatus = e.dataTransfer.getData('currentStatus')
  
  if (currentStatus !== targetStatus) {
    await projectStore.updateTask(projectId, taskId, { status: targetStatus })
  }
}

const totalTasks = computed(() => projectStore.tasks.length)
const completedTasks = computed(() => tasksByStatus.value.done?.length || 0)
const progressPercentage = computed(() => {
  if (totalTasks.value === 0) return 0
  return Math.round((completedTasks.value / totalTasks.value) * 100)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
    <!-- Indicateur de chargement -->
    <div v-if="isLoading && !currentProject" class="max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600">Chargement du projet...</p>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <button
          @click="router.push('/dashboard')"
          class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-4 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Retour au tableau de bord
        </button>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-3 h-3 rounded-full"
                  :style="{ backgroundColor: currentProject?.color || '#3b82f6' }"
                ></div>
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
                  {{ currentProject?.title || 'Projet sans titre' }}
                </h1>
              </div>
              <p v-if="currentProject?.description" class="text-gray-600">
                {{ currentProject.description }}
              </p>
            </div>

            <div class="flex flex-col items-end gap-2">
              <div class="text-sm text-gray-600">
                {{ completedTasks }} / {{ totalTasks }} tâches terminées
              </div>
              <div class="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                  :style="{ width: `${progressPercentage}%` }"
                ></div>
              </div>
              <div class="text-xs font-medium text-gray-700">{{ progressPercentage }}%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Instructions Drag & Drop -->
      <div class="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
        <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div class="text-sm text-blue-900">
          <strong>Astuce :</strong> Glissez-déposez les tâches entre les colonnes pour changer leur statut. Double-cliquez pour modifier les détails.
        </div>
      </div>

      <!--  Drag & Drop -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="col in columns" 
          :key="col.id" 
          class="flex flex-col"
          @dragover="onDragOver($event, col.id)"
          @dragleave="onDragLeave"
          @drop="onDrop($event, col.id)"
        >
          <!-- Column Header -->
          <div class="bg-white rounded-t-xl shadow-sm border border-gray-200 p-4">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-semibold text-gray-800 flex items-center gap-2">
                <span class="text-lg"></span>
                {{ col.label }}
              </h3>
              <span class="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                {{ tasksByStatus[col.id]?.length || 0 }}
              </span>
            </div>
          </div>

          <!-- Drop Zone -->
          <div
            class="flex-1 rounded-b-xl border-x border-b p-4 space-y-3 min-h-[400px] transition-all"
            :class="[
              col.color, 
              col.borderColor,
              draggedOverColumn === col.id ? 'ring-2 ring-blue-400 ring-offset-2' : ''
            ]"
          >
            <TransitionGroup name="task">
              <TaskCard
                v-for="task in tasksByStatus[col.id]"
                :key="task.id"
                :task="task"
                :project-id="projectId"
                @update="updateTask"
                @delete="deleteTask"
                @edit="openEditTask"
              />
            </TransitionGroup>

            <!-- Empty state per column -->
            <div v-if="tasksByStatus[col.id]?.length === 0" class="text-center py-8 text-gray-400">
              <svg class="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p class="text-sm">Aucune tâche</p>
            </div>

            <!-- Add Task Button -->
            <button
              @click="openAddTask(col.id)"
              class="w-full flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-white transition-all group"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <span class="font-medium">Ajouter une tâche</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Modal (Ajout OU Édition) -->
    <Teleport to="body">
      <div
        v-if="showTaskModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="showTaskModal = false"
      >
        <div class="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 transform transition-all">
          <h3 class="text-xl font-bold text-gray-900 mb-5">
            {{ editingTask ? 'Modifier la tâche' : 'Nouvelle tâche' }}
          </h3>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Titre <span class="text-red-500">*</span>
              </label>
              <input
                v-model="newTask.title"
                placeholder="Ex: Créer la maquette"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                @keyup.enter="saveTask"
                ref="taskTitleInput"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                v-model="newTask.description"
                placeholder="Détails de la tâche..."
                rows="3"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date limite</label>
              <input
                v-model="newTask.dueDate"
                type="date"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                v-model="newTask.status"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="todo">À faire</option>
                <option value="doing">En cours</option>
                <option value="done">Terminé</option>
              </select>
            </div>
          </div>

          <div class="flex gap-3 mt-6">
            <button
              @click="showTaskModal = false"
              class="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Annuler
            </button>
            <button
              @click="saveTask"
              :disabled="!newTask.title?.trim()"
              class="flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {{ editingTask ? 'Modifier' : 'Ajouter' }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.task-move,
.task-enter-active,
.task-leave-active {
  transition: all 0.3s ease;
}

.task-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.task-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.task-leave-active {
  position: absolute;
  width: calc(100% - 2rem);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>