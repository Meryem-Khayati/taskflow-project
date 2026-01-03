import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Étudiants, remplacez ceci par votre propre config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBr_iE_c4iZhJPj7xA5WRQAM5pADVfQx5M",
  authDomain: "management-project-1ab27.firebaseapp.com",
  projectId: "management-project-1ab27",
  storageBucket: "management-project-1ab27.firebasestorage.app",
  messagingSenderId: "344981414742",
  appId: "1:344981414742:web:f8deff0f76cbd05b73acf7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };