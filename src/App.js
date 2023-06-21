import "./App.css";
import Header from "./Componentes/Header";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Componentes/Contexto/CartContext";
import Error404 from "./Componentes/Error404";
import Home from "./Componentes/Home";
import Cart from "./Componentes/Cart";
import Checkout from "./Componentes/Checkout"

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/productos"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
