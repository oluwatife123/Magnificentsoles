import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig"; // Import Firestore from firebaseConfig
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Reference to the Firestore collection "items"
        const querySnapshot = await getDocs(collection(db, "items"));
        const itemsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(itemsList); // Set the fetched items in state
      } catch (error) {
        console.error("Error fetching items: ", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchItems(); // Call the fetch function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading text while fetching data
  }

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
