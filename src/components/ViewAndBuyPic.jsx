// View and Buy Pictures Page
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";




function ViewAndBuyPic() {
  const [pictures, setPictures] = React.useState([]);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const fetchPictures = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pictures"));
        const pics = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPictures(pics);
      } catch (error) {
        console.error("Error fetching pictures:", error);
      }
    };

    fetchPictures();
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const handleBuy = async (picture) => {
    if (!user) {
      alert("Please log in to buy pictures.");
      return;
    }

    try {
      await updateDoc(doc(db, "pictures", picture.id), {
        buyerId: user.uid,
      });

      alert("Picture bought successfully!");

      // Optionally refresh the pictures list to reflect changes
      setPictures((prev) =>
        prev.map((pic) => (pic.id === picture.id ? { ...pic, buyerId: user.uid } : pic))
      );
    } catch (error) {
      console.error("Error buying picture:", error);
      alert("An error occurred while buying the picture. Please try again.");
    }
  };

  return (
    <div>
      <h1>Available Pictures</h1>
      <div className="pictures">
        {pictures.length > 0 ? (
          pictures.map((picture) => (
            <div key={picture.id} className="picture-card">
              <img src={picture.url} alt={picture.title} width="200" />
              <h3>{picture.title}</h3>
              <p>${picture.price.toFixed(2)}</p>
              {picture.buyerId ? (
                <p>Sold</p>
              ) : user ? (
                <button onClick={() => handleBuy(picture)}>Buy</button>
              ) : (
                <p>Log in to buy</p>
              )}
            </div>
          ))
        ) : (
          <p>No pictures available.</p>
        )}
      </div>
    </div>
  );
}

export default ViewAndBuyPic;
