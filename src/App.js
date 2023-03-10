import './App.css';
import './componentes/NavBar/NavBar'
import Menu from './componentes/NavBar/Nav';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './componentes/CartWidget/CartWidget';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import NotFound from './componentes/pages/NotFound';





function App() {
  const onAdd = (cantidad) =>{
    console.log(`compraste ${cantidad} de items`)
  }

  return (
    <BrowserRouter>   <div className="App">
        
      
     
        <div className='grilla'>
      <header className="App-header">
        <div id="myDIV">
   <div className="item1"><Link to='/'><img  className='imagen' src={process.env.PUBLIC_URL + '/img/tresestrellas.png'}/></Link></div>
  <div className="item2"><h1 className='item22'>TRES ESTRELLAS</h1></div>
  <div className="item3"><CartWidget/></div> 
  <div className="item4"><Menu className="menu navbar-expand-sm" /></div>  
</div>

      <div className='swiper'>
      <marquee behavior="" direction="row">
      <div className="swiper-slide"> BIENVENIDXS A TRES ESTRELLAS ⭐⭐⭐   LA TIENDA DE LOS CAMPEONES DEL MUNDO 😎🏆-------  ENCONTRÁ TODO LO QUE NECESITAS PARA JUGAR A LA PELOTA⚽ ------- ENVÍOS A TODO EL PAÍS ------- SALE %15 OFF! </div>
      </marquee> 
      </div>
      </header>
     <main >
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '} />}></Route>
        <Route path='/detalle/:idItem'element={<ItemDetailContainer/>}></Route>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      </main>
      <footer>
        <section  className='pagos'>
      <img src={process.env.PUBLIC_URL + '/img/iconoAmex.png'} alt='american express' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoMASTER.png'} alt='mastercard' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoMP.png'} alt='mercado pago' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoVISA.png'} alt='visa' className='pago'></img>
      <h2 className='fut'>Site by Martina riesco</h2>
      </section>

      </footer>
      </div>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
