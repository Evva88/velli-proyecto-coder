import Item from "./Item";

const ItemList = ({items}) =>{
    return(
        <div>
            {items.map(item => <div key={item.idx} className="col-md-4">
                <Item item={item}/>
                </div>
                )}
        </div>
    )
}


export default ItemList;