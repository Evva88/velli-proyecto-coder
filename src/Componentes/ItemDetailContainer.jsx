import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
 // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then((resultado) => {
      setItems({ id: resultado.id, ...resultado.data() });
    //  setLoading(false);
    });
  }, [id]);

  return <div>{item ? <ItemDetail producto={item} /> : <p></p>}</div>;
};

export default ItemDetailContainer;
