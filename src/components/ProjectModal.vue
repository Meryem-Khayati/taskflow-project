<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-full max-w-md rounded bg-white p-5 shadow-lg">
      <h3 class="mb-4 text-lg font-semibold">
        {{ editing ? 'Modifier le projet' : 'Nouveau projet' }}
      </h3>

      <div class="space-y-3">
        <input
          v-model="form.title"
          placeholder="Nom du projet *"
          class="w-full rounded border px-3 py-2"
          required
        />
        <textarea
          v-model="form.description"
          placeholder="Description"
          rows="2"
          class="w-full rounded border px-3 py-2"
        ></textarea>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">Couleur :</label>
          <input v-model="form.color" type="color" class="h-8 w-8 cursor-pointer rounded border" />
        </div>
      </div>

      <div class="mt-4 flex justify-end gap-2">
        <button @click="$emit('close')" class="px-3 py-2">Annuler</button>
        <button
          @click="$emit('save', form)"
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {{ editing ? 'Modifier' : 'Créer' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Object, default: () => ({}) },
  editing: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue', 'close', 'save'])

const form = ref({
  title: '',
  description: '',
  color: '#3b82f6'
})

watch(() => props.modelValue, (newVal) => {
  if (newVal && Object.keys(newVal).length > 0) {
    form.value = { ...newVal }
  }
}, { immediate: true })
</script>