import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="container">
      <div className="col-md-4 my-3">
        <div className="card" style={{ width: "20rem" }}>
          <Link
            to={"/item/" + item.idx}
            className="text-dark text-decoration-none"
          >
            <img src={item.img} className="card-img-top2" alt={item.nombre} />
            <div className="card-body">
              <h3>{item.nombre}</h3>
              <p className="card-text">
                <span className="text-secondary">{item.nombre}</span>
                <br />
                <b>${item.precio}</b>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
