import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import ProductosItems from "./ProductosItems.json";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

  const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id
      ? query(itemsCollection, where("category", "==", id))
      : itemsCollection;
    getDocs(q).then((resultado) => {
      if (resultado.size > 0) {
        setItems(
          resultado.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        );
      } else {
        console.error("No hay productos relacionados.");
      }
    });
  }, [id]);

   /*useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");

      ProductosItems.forEach(producto => {
        addDoc(itemsCollection, producto);
      });
    
     console.log("agregar productos");
  }, []);*/

  return (
    <div className="container my-5">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
