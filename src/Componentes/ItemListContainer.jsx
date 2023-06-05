import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductosItems from "./ProductosItems.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? ProductosItems.filter((item) => item.category === id)
            : ProductosItems
        );
      });
    });

    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
