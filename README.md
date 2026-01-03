# Project Management – Kanban Simplifié

## Description du projet

Cette application est une **Single Page Application (SPA)** développée avec **Vue.js 3**.
Elle permet aux utilisateurs de créer des projets, d’y ajouter des tâches et de suivre leur
avancement à travers trois statuts : **À faire**, **En cours** et **Terminé**.

---

## Technologies utilisées

- Vue.js 3 
- Vite
- Vue Router
- Pinia (State Management)
- Firebase Authentication
- Cloud Firestore
- Firebase Hosting
- Tailwind CSS 

---

## Fonctionnalités principales

### Authentification
- Inscription avec email et mot de passe
- Connexion avec email/mot de passe
- Connexion via Google
- Déconnexion
- Protection des routes (Dashboard et projets)

### Tableau de bord
- Création de projets
- Modification et suppression de projets
- Affichage des projets de l’utilisateur connecté

### Gestion des tâches (Kanban)
- Ajout de tâches 
- Modification du statut des tâches 
- Suppression des tâches
- Synchronisation en temps réel avec Firestore

---

## Lancer le projet en local

1. Cloner le dépôt
```bash
git clone https://github.com/Meryem-Khayati/taskflow-project.git
````

2. Accéder au dossier du projet

```bash
cd taskflow-project
```

3. Lancer l’application

```bash
npm run dev
```

L’application sera accessible à l’adresse :
[http://localhost:5173](http://localhost:5173)

---

## Firebase

Le projet utilise **Firebase** pour :

* L’authentification des utilisateurs
* La base de données en temps réel (Cloud Firestore)
* L’hébergement de l’application (Firebase Hosting)

Les informations de configuration Firebase se trouvent dans :

```
src/firebase/config.js
```

---

## Déploiement

L’application est déployée sur **Firebase Hosting**.

URL de l’application :
**[https://management-project-1ab27.web.app](https://management-project-1ab27.web.app)**

---

## Réalisé par

* **KHAYATI Meryem**
* **Er-reguigue Halima**
* Génie Informatique
