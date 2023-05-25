const Header = () =>{
    return(
        <div className="header">
           <div className="container-fluid">
             <div className="row justify-content-center">
              <div className="col-md-3 offset-md-">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={"img/tokyo.jpg"} className="d-block w-100" alt={"tokyoR"} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={"img/dead.jpg"} className="d-block w-100" alt={"deadNote"} />
                </div>
                <div className="carousel-item">
                  <img src={"img/sakura.jpg"} className="d-block w-100" alt={"sakura"} />
                </div>
                <div className="carousel-item">
                  <img src={"img/slam.jpg"} className="d-block w-100" alt={"slam"} />
                </div>
                <div className="carousel-item">
                  <img src={"img/sailor.jpg"} className="d-block w-100" alt={"sailor"} />
                </div>
                <div className="carousel-item">
                  <img src={"img/blue.jpg"} className="d-block w-100" alt={"blue"} />
                </div>
                <div className="carousel-item">
                  <img src={"img/spy.jpg"} className="d-block w-100" alt={"spy"} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
             </div>
             </div>
             </div>
             </div>
        </div>
    )
}

export default Header; 