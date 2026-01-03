import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '@/firebase/config'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp
} from 'firebase/firestore'

export const useProjectStore = defineStore('project', () => {
  // État
  const projects = ref([])
  const currentProject = ref(null)
  const tasks = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  // Listener pour le projet actuel
  let unsubscribeCurrentProject = null

  // Écoute temps réel des projets de l'utilisateur
  const subscribeToProjects = (userId) => {
    if (!userId) return

    const q = query(
      collection(db, 'projects'),
      where('userId', '==', userId),
      // orderBy('createdAt', 'desc')
    )

    return onSnapshot(q, (snapshot) => {
      projects.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      loading.value = false
    }, (err) => {
      error.value = "Erreur de chargement des projets."
      console.error('[ProjectStore] subscribeToProjects error:', err)
      loading.value = false
    })
  }

  // Créer un projet
  const createProject = async (userId, data) => {
    loading.value = true
    error.value = null
    try {
      await addDoc(collection(db, 'projects'), {
        title: data.title,
        description: data.description || '',
        color: data.color || '#3b82f6',
        userId: userId,
        createdAt: serverTimestamp()
      })
    } catch (e) {
      error.value = "Impossible de créer le projet."
      console.error('[ProjectStore] createProject error:', e)
    } finally {
      loading.value = false
    }
  }

  // Modifier un projet
  const updateProject = async (projectId, data) => {
    try {
      const projectRef = doc(db, 'projects', projectId)
      await updateDoc(projectRef, {
        ...data,
        updatedAt: serverTimestamp()
      })
    } catch (e) {
      error.value = "Mise à jour échouée."
      console.error('[ProjectStore] updateProject error:', e)
    }
  }

  // Supprimer un projet + ses tâches
  const deleteProject = async (projectId) => {
    try {
      // Supprimer d'abord toutes les tâches
      const tasksQuery = query(collection(db, 'projects', projectId, 'tasks'))
      const taskSnapshot = await getDocs(tasksQuery)
      
      const deletePromises = taskSnapshot.docs.map(taskDoc => 
        deleteDoc(taskDoc.ref)
      )
      await Promise.all(deletePromises)

      // Puis supprimer le projet
      await deleteDoc(doc(db, 'projects', projectId))
    } catch (e) {
      error.value = "Suppression échouée."
      console.error('[ProjectStore] deleteProject error:', e)
    }
  }

  // Charger les tâches d'un projet (temps réel)
  const subscribeToTasks = (projectId) => {
    if (!projectId) return

    const tasksRef = collection(db, 'projects', projectId, 'tasks')
    const q = query(tasksRef, orderBy('createdAt', 'desc'))

    return onSnapshot(q, (snapshot) => {
      tasks.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    }, (err) => {
      error.value = "Erreur de chargement des tâches."
      console.error('[ProjectStore] subscribeToTasks error:', err)
    })
  }

  // Ajouter une tâche
  const addTask = async (projectId, taskData) => {
    try {
      const tasksRef = collection(db, 'projects', projectId, 'tasks')
      await addDoc(tasksRef, {
        title: taskData.title,
        description: taskData.description || '',
        dueDate: taskData.dueDate || null,
        status: taskData.status || 'todo',
        createdAt: serverTimestamp()
      })
    } catch (e) {
      error.value = "Ajout de tâche échoué."
      console.error('[ProjectStore] addTask error:', e)
    }
  }

  // Mettre à jour une tâche
  const updateTask = async (projectId, taskId, data) => {
    try {
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId)
      await updateDoc(taskRef, {
        ...data,
        updatedAt: serverTimestamp()
      })
    } catch (e) {
      error.value = "Mise à jour de tâche échouée."
      console.error('[ProjectStore] updateTask error:', e)
    }
  }

  // Supprimer une tâche
  const deleteTask = async (projectId, taskId) => {
    try {
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId)
      await deleteDoc(taskRef)
    } catch (e) {
      error.value = "Suppression de tâche échouée."
      console.error('[ProjectStore] deleteTask error:', e)
    }
  }

  const subscribeToCurrentProject = (projectId) => {
    if (unsubscribeCurrentProject) {
      unsubscribeCurrentProject()
    }

    if (!projectId) return

    const projectRef = doc(db, 'projects', projectId)
    
    unsubscribeCurrentProject = onSnapshot(projectRef, (docSnap) => {
      if (docSnap.exists()) {
        currentProject.value = {
          id: docSnap.id,
          ...docSnap.data()
        }
        loading.value = false
      } else {
        error.value = "Projet introuvable."
        currentProject.value = null
        loading.value = false
      }
    }, (err) => {
      error.value = "Erreur lors du chargement du projet."
      console.error('[ProjectStore] subscribeToCurrentProject error:', err)
      loading.value = false
    })

    return unsubscribeCurrentProject
  }

  const loadProject = async (projectId) => {
    loading.value = true
    error.value = null
    
    try {
      const existingProject = projects.value.find(p => p.id === projectId)
      if (existingProject) {
        currentProject.value = existingProject
        loading.value = false
        return
      }

      const projectRef = doc(db, 'projects', projectId)
      const projectSnap = await getDoc(projectRef)
      
      if (projectSnap.exists()) {
        currentProject.value = {
          id: projectSnap.id,
          ...projectSnap.data()
        }
      } else {
        error.value = "Projet introuvable."
        console.error('[ProjectStore] Project not found:', projectId)
      }
    } catch (e) {
      error.value = "Erreur lors du chargement du projet."
      console.error('[ProjectStore] loadProject error:', e)
    } finally {
      loading.value = false
    }
  }

  // Nettoyer le listener du projet actuel
  const clearCurrentProject = () => {
    if (unsubscribeCurrentProject) {
      unsubscribeCurrentProject()
      unsubscribeCurrentProject = null
    }
    currentProject.value = null
  }

  return {
    projects,
    currentProject,
    tasks,
    loading,
    error,
    subscribeToProjects,
    subscribeToCurrentProject,
    createProject,
    updateProject,
    deleteProject,
    subscribeToTasks,
    addTask,
    updateTask,
    deleteTask,
    loadProject,
    clearCurrentProject
  }
})