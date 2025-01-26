import axios from "axios";

const uploadToCloudinary = async (file) => {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dqvho18kf/image/upload";
  const UPLOAD_PRESET = "user-uploads";

  try {
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

  
    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    
    return response.data.secure_url;
  } catch (err) {
    console.error("Error uploading to Cloudinary:", err);
    throw err; 
  }
};

export default uploadToCloudinary;
