import { useContext, useState } from "react";
import { CartContext } from "./Contexto/CartContext";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const { cart, sumProductos } = useContext(CartContext);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <table className="table">
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt={item.titulo} width={80} />
                  </td>
                  <td>{item.titulo}</td>
                  <td>{item.quantity} x ${item.precio}</td>
                  <td className="text-center">${item.quantity * item.precio}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-end">
                  Total a Pagar
                </td>
                <td className="align-middle text-center">${sumProductos()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
