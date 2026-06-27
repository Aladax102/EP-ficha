import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHUzlaB_nSgmSta5WfFxupabKgoCfuCAs",
  authDomain: "ep-rpg-ficha.firebaseapp.com",
  projectId: "ep-rpg-ficha",
  storageBucket: "ep-rpg-ficha.firebasestorage.app",
  messagingSenderId: "714165890015",
  appId: "1:714165890015:web:5839a9774061da46b5f26a"
};

const app = initializeApp(firebaseConfig);

// Banco de dados
export const db = getFirestore(app);