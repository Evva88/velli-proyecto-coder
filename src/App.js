import "./App.css";
import Header from "./Componentes/Header";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Componentes/Error404";
import Home from "./Componentes/Home";
import Cart from "./Componentes/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/productos"} element={<ItemListContainer />} />
          <Route path={"/categoy/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
