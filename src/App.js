import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import PrincipalPage from './page/PrincipalPage';
import Tops from './page/Tops';
import Conjuntos from './page/Conjuntos';
import Franelas from './page/Franelas';
import ShortYVestidos from './page/ShortYVestidos/ShortYVestidos';
import {DataPoducto} from './context/ContextProvider.js'
import Carrito from './componentes/Carrito';
import DetalleProducto from './page/DetalleProducto/DetalleProducto';
import PiePagina from './componentes/PiePagina/PiePagina';
function App() {
  return (
    <DataPoducto>
    <BrowserRouter>
    <NavBar></NavBar>
    <Carrito/>
    <Routes>
    <Route path="/" exact element={<PrincipalPage/>}></Route>
    <Route path='/tops' element={<Tops/>}></Route>
    <Route path='/conjuntos' element={<Conjuntos/>}></Route>
    <Route path='/franelas' element={<Franelas/>}></Route>
    <Route path='/shortYvestidos' element={<ShortYVestidos/>}></Route>
    <Route path='/detalle/:id' element={<DetalleProducto/>}></Route>
    </Routes>
    </BrowserRouter>
    <PiePagina/>
    </DataPoducto>
  );
}

export default App;
