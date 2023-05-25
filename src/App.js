import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemListContainer from './Componentes/MainProductos.jsx/ItemListContainer';
import Novedades from './Componentes/Novedades';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header/>
         <h1>💚Mundo Manga💚</h1>
         <NavBar/>
         <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='/novedades' element={<Novedades />}/>    
         </Routes>
         <Footer/>
         </BrowserRouter>
    </div>
  );
}

export default App;
