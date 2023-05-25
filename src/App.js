import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemListContainer from './Componentes/ItemListContainer';
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
              
         </Routes>
         <Footer/>
         </BrowserRouter>
    </div>
  );
}

export default App;
