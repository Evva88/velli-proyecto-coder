import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';
import ItemListContainer from './Componentes/ItemListContainer';



function App() {
  return (
    <div className="App">
         <Header/>
         <h1>💚Mundo Manga💚</h1>
         <NavBar/>
         <ItemListContainer greeting={"No hay productos en tu carrito"}/>
         <Main/>
         <Footer/>
    </div>
  );
}

export default App;
