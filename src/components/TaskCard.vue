<script setup>
import { computed } from 'vue'

const props = defineProps({
  task: { type: Object, required: true },
  projectId: { type: String, required: true }
})

const emit = defineEmits(['update', 'delete', 'edit'])

const onStatusChange = (e) => {
  emit('update', props.task.id, { status: e.target.value })
}

const isOverdue = computed(() => {
  if (!props.task.dueDate) return false
  const dueDate = new Date(props.task.dueDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dueDate < today && props.task.status !== 'done'
})

const dueDateLabel = computed(() => {
  if (!props.task.dueDate) return null
  const dueDate = new Date(props.task.dueDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const diffTime = dueDate - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 0) return `En retard de ${Math.abs(diffDays)} jour${Math.abs(diffDays) > 1 ? 's' : ''}`
  if (diffDays === 0) return "Aujourd'hui"
  if (diffDays === 1) return "Demain"
  if (diffDays <= 7) return `Dans ${diffDays} jours`
  return dueDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
})

// Drag & Drop handlers
const onDragStart = (e) => {
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('taskId', props.task.id)
  e.dataTransfer.setData('currentStatus', props.task.status)
  e.target.style.opacity = '0.5'
}

const onDragEnd = (e) => {
  e.target.style.opacity = '1'
}
</script>

<template>
  <div 
    class="group bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all cursor-move"
    :class="{ 'border-l-4 border-l-red-400': isOverdue }"
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
  >
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <!-- Drag handle icon -->
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
          <h4 class="font-semibold text-gray-900 group-hover:text-blue-600 transition flex-1">
            {{ task.title }}
          </h4>
        </div>
        
        <p v-if="task.description" class="text-sm text-gray-600 mb-2 line-clamp-2">
          {{ task.description }}
        </p>

        <div class="flex flex-wrap items-center gap-2 mt-2">
          <!-- Due Date Badge -->
          <div
            v-if="task.dueDate"
            class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
            :class="{
              'bg-red-100 text-red-700': isOverdue,
              'bg-yellow-100 text-yellow-700': !isOverdue && dueDateLabel?.includes('jour'),
              'bg-gray-100 text-gray-600': !isOverdue && !dueDateLabel?.includes('jour')
            }"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ dueDateLabel }}
          </div>

          <!-- Status Badge -->
          <div
            class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
            :class="{
              'bg-gray-100 text-gray-600': task.status === 'todo',
              'bg-blue-100 text-blue-700': task.status === 'doing',
              'bg-green-100 text-green-700': task.status === 'done'
            }"
          >
            <span class="w-1.5 h-1.5 rounded-full"
              :class="{
                'bg-gray-400': task.status === 'todo',
                'bg-blue-500': task.status === 'doing',
                'bg-green-500': task.status === 'done'
              }"
            ></span>
            {{ task.status === 'todo' ? 'À faire' : task.status === 'doing' ? 'En cours' : 'Terminé' }}
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
        <button
          @click.stop="emit('edit', task)"
          class="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition"
          title="Modifier"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        
        <button
          @click.stop="emit('delete', task.id)"
          class="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition"
          title="Supprimer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

[draggable="true"] {
  cursor: move;
  cursor: grab;
}

[draggable="true"]:active {
  cursor: grabbing;
}
</style>