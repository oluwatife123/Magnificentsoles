import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ViewPictures = () => {
  const [pictures, setPictures] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pictures"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Fetched Data:", data); 
        setPictures(data);
      } catch (err) {
        console.error("Error fetching pictures:", err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPictures();
  }, []); 

  const handleBuyClick = (pictureId) => {
    
    console.log(`Buying picture with ID: ${pictureId}`);
    
    alert(`You've selected the picture with ID: ${pictureId} to buy.`);
  };

  return (
    <div className="mt-32">
      <h1>Pictures for Sale</h1>

      {loading ? (
        <p>Loading pictures...</p>  
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {pictures.length > 0 ? (
            pictures.map((pic) => (
              <div key={pic.id}>
                <img
                  src={pic.imageUrl}
                  alt="Uploaded"
                  style={{ maxWidth: "100%" }}
                  onError={(e) => (e.target.src = "fallback-image.jpg")} 
                />
                <p>Price: #{pic.price}</p>
                <button
                  onClick={() => handleBuyClick(pic.id)}
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Buy Picture
                </button>
              </div>
            ))
          ) : (
            <p>No pictures available.</p> 
          )}
        </div>
      )}
    </div>
  );
};

export default ViewPictures;
