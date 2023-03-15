import { BsFillBasket3Fill } from "react-icons/bs";
import './style.css';
import cartContext from "../../context/CartContext";
import { useContext } from "react";
function CartWidget  (){
   const {cart}= useContext(cartContext)
   const cartCount = cart.length
return(
 <a href="#" className="icono" >
    <BsFillBasket3Fill className="icono" />
    <span> {cartCount}</span>
 </a>

);
}
export default CartWidget