import React, { useState, useEffect } from 'react';
import ItemCount from "./ItemCount";
import ProductosItems from "./ProductosItems.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ProductosItems); 
      }, 2000);
    });

    promesa.then(data => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className='row'>
        <ItemCount stock={21} />
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default ItemListContainer;