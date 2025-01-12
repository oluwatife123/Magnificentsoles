// services/firebaseServices.js
import app from "./firebaseConfig"; // Import the initialized Firebase app
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firebase services once using the initialized app
const auth = getAuth(app); // Attach to the initialized Firebase app
const db = getFirestore(app); // Attach Firestore to the initialized app

// Login Function
export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(`Login Error: ${error.message}`);
  }
};

// Sign Up Function
export const signUp = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(`Sign-Up Error: ${error.message}`);
  }
};

// Fetch Data from Firestore
export const fetchPhotos = async () => {
  try {
    const photosCollection = collection(db, "photos"); // Reference the "photos" collection
    const querySnapshot = await getDocs(photosCollection); // Fetch all documents
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw new Error(`Firestore Fetch Error: ${error.message}`);
  }
};

// Export Firebase services for future use
export { auth, db };
