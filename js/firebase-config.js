// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA48s-f6FtQ1tDbTRaQ8iOjpmq7GWEG0tQ",
  authDomain: "crm-app-a88a5.firebaseapp.com",
  projectId: "crm-app-a88a5",
  storageBucket: "crm-app-a88a5.firebasestorage.app",
  messagingSenderId: "736220861013",
  appId: "1:736220861013:web:38eb184b9e58001854fadc",
  measurementId: "G-3QM40H361D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log("✅ Firebase Ready");