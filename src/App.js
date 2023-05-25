import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemListContainer from './Componentes/MainProductos.jsx/ItemListContainer';



function App() {
  return (
    <div className="App">
         <Header/>
         <h1>💚Mundo Manga💚</h1>
         <NavBar/>
         <ItemListContainer />
         <Footer/>
    </div>
  );
}

export default App;
