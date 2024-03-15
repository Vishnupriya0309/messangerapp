import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXiMs3702bOxwe4uuW6EV3Cf1fRUx3MZE",
  authDomain: "messenger-app-90a0e.firebaseapp.com",
  projectId: "messenger-app-90a0e",
  storageBucket: "messenger-app-90a0e.appspot.com",
  messagingSenderId: "925760953584",
  appId: "1:925760953584:web:320564b2203fa08ce3f635"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()