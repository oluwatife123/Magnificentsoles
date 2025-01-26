import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import UploadPicture from "./UploadPicture";
import ViewPictures from "./ViewPictures";

const PicturesManager = () => {
  const [pictures, setPictures] = useState([]);

 
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pictures"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPictures(data);
    });

    return () => unsubscribe(); 
  }, []);

  
  const addPicture = async (imageUrl, price, sellerId) => {
    try {
      await addDoc(collection(db, "pictures"), {
        imageUrl,
        price,
        sellerId,
        createdAt: new Date(),
      });
    } catch (err) {
      console.error("Error adding picture:", err);
    }
  };


  const deletePicture = async (id) => {
    try {
      await deleteDoc(doc(db, "pictures", id));
    } catch (err) {
      console.error("Error deleting picture:", err);
    }
  };

  return (
    <div>
      <h1>Pictures Manager</h1>
      <UploadPicture addPicture={addPicture} deletePicture={deletePicture} pictures={pictures} />
    </div>
  );
};

export default PicturesManager;
