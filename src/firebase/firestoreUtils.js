import { db } from "../firebase/firebaseConfig"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

// Function to save picture data
const savePictureData = async (imageUrl, price, sellerId) => {
  try {
    await addDoc(collection(db, "pictures"), {
      imageUrl,
      price,
      sellerId,
      createdAt: new Date(),
    });
    console.log("Picture data saved successfully!");
  } catch (err) {
    console.error("Error saving picture data:", err);
  }
};

export default savePictureData; // Export the function
