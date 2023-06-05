const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card" style={{ width: "10rem" }}>
              <img src="./img/wharap.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "10rem" }}>
              <img
                src="./img/instagram.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "12rem" }}>
              <img
                src="./img/mediosPago.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="cardPago" style={{ width: "10rem" }}>
              <img src="./img/6cuotas.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
