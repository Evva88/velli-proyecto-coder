import { useContext, useState } from "react";
import { CartContext } from "./Contexto/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, sumProductos} = useContext(CartContext);

    const finalizarCompra = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, phone:telefono, email:email}
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumProductos();
        const orden= {buyer:buyer, items:items, date:date, total:total};
        console.log(orden);

        
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, orden).then(resultado => {
            setOrderId(resultado.id);
        })
        .catch(resultado => {
            console.log("Error! No se pudo completar la compra!");
        });

    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={finalizarCompra}>Finalizar Compra</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <table className="table">
                        <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                             <td><img src={item.img} alt={item.nombre} width={80} /></td>
                            <td>{item.nombre}</td>
                            <td>{item.quantity} x ${item.precio}</td>
                            <td className="text-center">${item.quantity * item.precio}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                            <td className="align-middle text-center">${sumProductos()}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert-secondary" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Numero de Orden de Compra es: <b>{orderId}</b></p>
                        <p><Link to={"/"} className="btn btn-light mt-5">Volver al Inicio</Link></p>
                    </div> : ""}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Checkout;