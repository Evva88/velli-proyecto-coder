import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd}) => {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemsAdd, setItemsAdd] = useState(false);

  const agregarAlCarrito = () => {
    if (items < itemStock) {
      setItems(items + 1);
    }
  };

  const desAgregarAlCarrito = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  const addCarrito = () => {
    if (items <= itemStock) {
      setItemStock(itemStock - items);
      setItems(1);
      setItemsAdd(true);
      onAdd(items);
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

 

  return (
    <div className="container-btn text-center">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light" onClick={desAgregarAlCarrito}>-</button>
            <button type="button" className="btn btn-light">{items}</button>
            <button type="button" className="btn btn-light" onClick={agregarAlCarrito}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {itemsAdd ? <Link to={"/Cart"} className="btn btn-light">Finalizar Compra</Link> : <button type="button" className="btn btn-light" onClick={addCarrito}>Agregar</button>}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;


