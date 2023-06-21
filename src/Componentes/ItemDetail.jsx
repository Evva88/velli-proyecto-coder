import React, { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./Contexto/CartContext";



const ItemDetail = ({ producto }) => {
  const {addItem} = useContext(CartContext);
  const [item, setItem] = useState({});

  const onAdd = (quantity)=>{
    addItem(item, quantity);
  }


  useEffect(() => {
    setItem(producto);
    console.log(producto);
  }, [producto]);

  return (
    <div className="container">
      <div className="col-md-4 my-3">
        <div className="card" style={{ width: "25rem" }}>
          <img src={item.img} alt={item.nombre} className="card-img-top" />
          <div className="card-body">
            <h3>{item.nombre}</h3>
            <p className="card-text">
              <span className="text-secondary">{item.detalle}</span>
              <br />
              <b>${item.precio}</b>
            </p>
          </div>

          <ItemCount stock={item.stock} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
