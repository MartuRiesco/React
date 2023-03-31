import './style.css';
import { Link } from 'react-router-dom';
import Menu from '../NavBar/Nav';
import CartWidget from '../CartWidget/CartWidget';

function Header (){
    return(<header className="App-header">
    <div id="myDIV">
    <div className="item1"><Link to='/'><img  alt='logo' className='imagen' src={process.env.PUBLIC_URL + '/img/tresestrellas.png'}/></Link></div>
    <div className="item2"><h1 className='item22'>TRES ESTRELLAS</h1></div>
    <div className="item3"><CartWidget/></div> 
    <div className="item4"><Menu className="menu navbar-expand-sm" /></div>  
    </div>
    
    <div className='swiper'>
    <marquee behavior="" direction="row">
    <div className="swiper-slide"> BIENVENIDXS A TRES ESTRELLAS ⭐⭐⭐   LA TIENDA DE LOS CAMPEONES DEL MUNDO  ⭐⭐⭐  ENCONTRÁ TODO LO QUE NECESITAS PARA JUGAR A LA PELOTA  ⭐⭐⭐  ENVÍOS A TODO EL PAÍS  ⭐⭐⭐  SALE %15 OFF! </div>
    </marquee> 
    </div>
    </header>

    )
}
export default Header

