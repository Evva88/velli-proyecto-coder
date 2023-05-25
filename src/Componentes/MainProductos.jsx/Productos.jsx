import React, { useState, useEffect } from 'react';
import ProductosItems from "./ProductosItems.json"

const Productos =() => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
           const arrayProductos = [<ProdutosItems />] //aqui array de productos

           const promesa = new Promise((resolve) => {
            setTimeout(() =>{
              resolve(<ProductosItemns />) //array, que vemos como la ponemos
            },2000);
           });
    
    promesa.then(respuesta => {
       console.log(respuesta);
    });
}, []);


    return (
        <div> 
            <div className="col-md-3 offset-md-">
            <div className="container text-center">
            <div class="row">
            <img src="${producPedido.img}" alt="${producPedido.nombre}" class="card-img-top" />
            <div className="card-body">
            <p class="card-text">${producPedido.nombre} ${producPedido.precio}</p>
            <button className="btn btn-warning" onclick="agregarAlCarrito(${producPedido.id});" title="Agregar Producto">Pedir</button>
            </div>

            </div>
            </div>
            </div>
        </div>
            )}


export default Productos;