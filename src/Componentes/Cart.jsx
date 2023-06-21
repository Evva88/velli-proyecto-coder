import { useContext } from "react";
import { CartContext } from "./Contexto/CartContext";
import trash from "./trash.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalProductos, sumProductos, removeItem, clear } =
    useContext(CartContext);

  if (totalProductos() === 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-danger" role="alert">
              No se encontraron productos en el Carrito!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h1>Productos Seleccionados</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
              <tr>
                <td colSpan={4}></td>
                <td className="text-end">
                  <button
                    className="btn btn-light" onClick={() => {clear();}}
                    title="Vaciar Carrito">
                    Vaciar Carrito
                  </button></td>
              </tr>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt={item.nombre} width={80} /></td>
                  <td>{item.nombre}</td><td>
                    {item.quantity} x ${item.precio}
                  </td>
                  <td className="text-center">
                    ${item.quantity * item.precio}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-light" onClick={() => {removeItem(item.id);
                      }}
                      title="Eliminar Producto">
                      <img src={trash} alt="Eliminar Producto" width={30} />
                    </button></td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-end">
                  Total a Pagar</td>
                <td className="text-center">${sumProductos()}</td>
                  <td className="align-middle text-end"><Link to={"/Checkout"} className="btn btn-light">Finalizar Compra</Link></td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
