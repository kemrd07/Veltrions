import { auth, provider } from './firebase.js';
import { signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Lista de correos autorizados
const superadmin = "patitoonichan380@gmail.com";
const autorizados = [
  superadmin,
  "hirosantiagom@gmail.com",
  "playstationovena@gmail.com",
  "veltrions@gmail.com",
  "fabianmamani@gloriososancarlos.edu.pe"
];

// Función para iniciar sesión
export function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const email = user.email;
      localStorage.setItem("correo", email);
      alert(`Bienvenido, ${user.displayName || email}`);

      if (location.pathname.includes("admin")) {
        window.location.href = autorizados.includes(email) ? "/admin/index.html" : "/index.html";
      } else {
        window.location.href = "/catalogo.html";
      }
    })
    .catch((error) => {
      alert("Error al iniciar sesión: " + error.message);
    });
}

// Escucha si ya está logueado
onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    localStorage.setItem("correo", email);

    // Mostrar correo en admin.html si aplica
    const emailTag = document.getElementById("userEmail");
    if (emailTag) {
      emailTag.textContent = `Sesión iniciada como: ${email}`;

      if (email === superadmin) {
        document.getElementById("soloSuperadmin").style.display = "block";
      }
      if (autorizados.includes(email)) {
        document.getElementById("adminBase").style.display = "block";
      }
    }
  }
});

// Cerrar sesión
export function logout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("correo");
      window.location.href = "/index.html";
    })
    .catch((error) => {
      alert("Error al cerrar sesión: " + error.message);
    });
}