import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const loginAndFetchData = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password); // Ensure user is signed in

    const db = getFirestore();
    const photosCollection = collection(db, "photos");
    const querySnapshot = await getDocs(photosCollection);

    const photos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Fetched photos:", photos);
    return photos;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
