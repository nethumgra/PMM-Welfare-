import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3jlpc_vbUydda2XpDj5Xd1J8kVei9v8U",
  authDomain: "inventory-c3cca.firebaseapp.com",
  projectId: "inventory-c3cca",
  storageBucket: "inventory-c3cca.firebasestorage.app",
  messagingSenderId: "396140403894",
  appId: "1:396140403894:web:316617b8e390f8b0575a17",
  measurementId: "G-YK5X3Z6HER"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);