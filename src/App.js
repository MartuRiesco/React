import './App.css';
import './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './componentes/pages/NotFound';
import Footer from './componentes/Footer/Footer';
import { CartContextProvider } from './context/CartContext';
import Header from './componentes/Header/Header';
import CartContainer from './componentes/CartContainer/CartContainer';
import DetallesCompra from './componentes/DetallesCompra/DetallesCompra';
import Contacto from './componentes/Contacto/Contacto';
import Tiendas from './componentes/Tiendas/Tiendas';
import Preguntas from './componentes/Preguntas/Preguntas';





function App() {


  return (
    <CartContextProvider>
    <BrowserRouter> 
    <div className="App">     
    <div className='grilla'>
  
   <Header/>
     <main >
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '} />}></Route>
        <Route path='/detalle/:idItem'element={<ItemDetailContainer/>}></Route>
        <Route path='/detallesCompra/:idItem'element={<DetallesCompra/>}></Route>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '}/>}/>
        <Route path='/cart' element={<CartContainer/>}></Route>
        <Route path='/Tiendas' element={<Tiendas></Tiendas>}></Route>
        <Route path='/Preguntas' element={<Preguntas></Preguntas>}></Route>
        <Route path='/categoria/Contacto' element={<Contacto></Contacto>}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
<Footer/>
      </main>
      </div>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
