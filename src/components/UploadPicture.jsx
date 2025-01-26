import React, { useState } from "react";
import savePictureData from "../firebase/firestoreUtils";
import uploadToCloudinary from "../firebase/uploadToCloudinary";
import { auth } from "../firebase/firebaseConfig";
import Footer from "./Footer";

const UploadPicture = ({ addPicture, pictures = [], deletePicture }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [price, setPrice] = useState(""); 
  const fileInputRef = React.createRef(); 

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !price) {
      alert("Please select a file and set a price!");
      return;
    }

    setIsUploading(true);
    try {
      const uploadedUrl = await uploadToCloudinary(file);
      const sellerId = auth.currentUser ? auth.currentUser.uid : "anonymous";

      await savePictureData(uploadedUrl, price, sellerId);


      setPrice("");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; 
      }

      if (addPicture) {
        addPicture(uploadedUrl, price);
      }
    } catch (err) {
      console.error("Error uploading picture:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
    <div className="mt-32">
      <h2>Upload a Picture</h2>
      <div>
        <input
          type="number"
          placeholder="Set your price (#)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={isUploading}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div>
        {/* Button  */}
        <button
          onClick={handleFileButtonClick}
          disabled={isUploading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {isUploading ? "Uploading..." : "Choose a Picture"}
        </button>

        {/* Hidden  input */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }} 
          accept="image/*"
          disabled={isUploading}
        />
      </div>

      <h3>Your Uploaded Pictures</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {pictures && pictures.length > 0 ? (
          pictures.map((pic) => (
            <div key={pic.id}>
              <img src={pic.imageUrl} alt="Uploaded" style={{ maxWidth: "100%", marginBottom: "10px" }} />
              <p>Price: ${pic.price}</p>
              <button
                onClick={() => deletePicture(pic.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No pictures uploaded yet.</p>
        )}
      </div>
    </div>
    <div className="">
        <Footer />

    </div>
    </>
  );
};

export default UploadPicture;
