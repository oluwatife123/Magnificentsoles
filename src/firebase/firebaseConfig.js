import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";




// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCyTXBI1eCFVpeEpZhyHEIsQVUXvH_0V2Q",
  authDomain: "magnificentsoles.firebaseapp.com",
  projectId: "magnificentsoles",
  storageBucket: "magnificentsoles.appspot.com",
  messagingSenderId: "46824209645",
  appId: "1:46824209645:web:7134b967b948c691f1e0e4",
  measurementId: "G-MM4Z831FWQ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;