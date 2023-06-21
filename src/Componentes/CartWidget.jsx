import { Link } from "react-router-dom";
import { CartContext } from "./Contexto/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalProductos } = useContext(CartContext);

  return totalProductos() > 0 ? (
    <Link
      type="button"
      className="btn btn-primary position-relative"
      to={"/Cart"}
    >
      <img src={"../img/cart2.svg"} className="logo" alt="carrito" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <span className="visually-hidden">unread messages</span>
        {totalProductos()}
      </span>
    </Link>
  ) : (
    ""
  );
};

export default CartWidget;
