import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then((resultado) => {
      setItems({ id: resultado.id, ...resultado.data() });
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row">
      {loading ? <Loading /> : <ItemDetail producto={item} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
