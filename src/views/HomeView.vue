<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 text-center">
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Gérez vos projets
        <span class="text-blue-600">simplement</span>
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        Organisez vos tâches en temps réel.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/auth"
          class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Commencer
        </RouterLink>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-lg shadow-sm">
          
          <h3 class="font-semibold text-gray-800">Sécurisé</h3>
          <p class="text-sm text-gray-600 mt-1">Authentification Firebase (Email & Google)</p>
        </div>
        <div class="bg-white p-5 rounded-lg shadow-sm">
          
          <h3 class="font-semibold text-gray-800">Kanban</h3>
          <p class="text-sm text-gray-600 mt-1">3 colonnes : À faire • En cours • Terminé</p>
        </div>
        <div class="bg-white p-5 rounded-lg shadow-sm">
          
          <h3 class="font-semibold text-gray-800">Temps réel</h3>
          <p class="text-sm text-gray-600 mt-1">Mises à jour synchronisées entre tous les onglets</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>