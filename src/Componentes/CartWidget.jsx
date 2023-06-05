const CartWidget = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary position-relative">
        <img src={"img/cart2.svg"} className="logo" alt="carrito" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1<span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
