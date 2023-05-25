const Item = ({item}) => {

    return (
         <div className="card" style="width: 18rem;">
         <img src={item.img} className="card-img-top" alt={item.nombre}/>
         <div className="card-body">
         <h3>{item.nombre}</h3>  
         <p className="card-text">{item.precio}</p>
         </div>
         </div>
    )
}

export default Item;