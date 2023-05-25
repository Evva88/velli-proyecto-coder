import CardImg from "./CardImg";

const NavBar = () => {
    return (
        <div className="navBar">
          <div className="container">
          <div className="row">
          <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-body-tertiary bg-dark">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">Productos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={"img/menu(3).svg"} alt="" />
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Novedades</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Lista</a>
          </li>
          </ul>
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          
          </div>
          </div>
          
          </nav>
          </div>
          </div>
          </div>
          
          
          <div><CardImg /></div>
        </div>
    )
}

export default NavBar;