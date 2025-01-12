// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";

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

export default app;
