import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(producto);
  }, [producto]);

  return (
    <div className="container my-5">
      <div className="col-md-4 my-3">
             <div className="card" style={{ width: "20rem" }}>
                <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <img src={item.img} className="card-img-top2" alt={item.nombre} />
                <div className="card-body">
                <h3>{item.nombre}</h3>
                <p className="card-text"><span className="text-secondary">{item.nombre}</span><br /><b>${item.precio}</b></p>
                </div>
                </Link>
                <ItemCount stock={item.stock} />
          </div>
            
          </div>
        </div>
      
    
  );
};

export default ItemDetail;
