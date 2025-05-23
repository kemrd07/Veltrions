// Importa las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

// Configuración de Firebase (tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyC5cMlIDD2Jo5tEN7M3_vX3U3sWvTyxpIU",
  authDomain: "veltrions.firebaseapp.com",
  projectId: "veltrions",
  storageBucket: "veltrions.firebasestorage.app",
  messagingSenderId: "783393469416",
  appId: "1:783393469416:web:e742da163325393de3aa5d",
  measurementId: "G-T3S5BRG2EM"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios de Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar para usar en otros archivos
export { auth, provider, db, storage };