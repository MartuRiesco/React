import { BsFillBasket3Fill } from "react-icons/bs";
import './style.css';
function CartWidget  (){
return(
 <a href="#" className="icono" >
    <BsFillBasket3Fill className="icono" />
    <span> 2 </span>
 </a>

);
}
export default CartWidget