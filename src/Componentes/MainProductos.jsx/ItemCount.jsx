import { useEffect, useState } from "react"

const ItemCount = ([stock]) => {
     const [items, setItems] = useState (0); 
     const [itemStock, setItemStock] = useState (stock);
     const agregarAlCarrito = () => {
        if (items < itemStock){
            setItems(items + 1);
        }
       
     }

     const desAgregarAlCarrito = () => {
        if (items > 0){
            setItems(items - 1);
        }
       
     }
     
    const onAdd = () => {
        if (items <= itemStock){
            setItemStock(itemStock - items);
            setItems(0);
        }
    }
     
    useEffect(() =>{
        setItemStock (stock);

    }, [stock]);

    return(
        <div className="container-btn">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="">
                       <button type="button" className="btn btn-ligth" onClick={desAgregarAlCarrito}>-</button>
                       <button type="button" className="btn btn-ligth">{items}</button>
                       <button type="button" className="btn btn-ligth"  onClick={agregarAlCarrito}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className = "btn btn-ligth" type="button" onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>
    )
    
    }


    export default ItemCount;

