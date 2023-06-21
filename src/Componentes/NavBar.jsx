import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
      
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-body-tertiary bg-dark">
              <Link to={"/Home"}>
                <img
                  src={"./img/nav.jpg"}
                  className="logo2"
                  alt="Home"
                  width="40"
                  height="40"
                />
              </Link>
              <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/productos"}>
                  Productos
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img src={"img/menu(3).svg"} alt="" />
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={"/category/Accion"}
                      >
                        Accion
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/category/Comedia"}>
                        Comedia
                      </NavLink>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Buscar"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Buscar
                    </button>
                  </form>
                  <CartWidget />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
   
  );
};

export default NavBar;
