import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProductosItems from "./ProductosItems.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ProductosItems.find(item => item.id === parseInt(id)));
      }, 2000);
    });

    promesa.then(data => {
      setItems(data);
    });
  }, [id]);

  return (
    <div>
      {item ? (
        <ItemDetail producto={item} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
