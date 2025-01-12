import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyTXBI1eCFVpeEpZhyHEIsQVUXvH_0V2Q",
  authDomain: "magnificentsoles.firebaseapp.com",
  projectId: "magnificentsoles",
  storageBucket: "magnificentsoles.firebasestorage.app",
  messagingSenderId: "46824209645",
  appId: "1:46824209645:web:7134b967b948c691f1e0e4",
  measurementId: "G-MM4Z831FWQ"
};

const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };