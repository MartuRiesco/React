import { BsFillBasket3Fill } from "react-icons/bs";
import './style.css';
import cartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function CartWidget  (){
   const {cart}= useContext(cartContext)
   const cartCount = cart.length
return(
<Link to='/cart'>
    <BsFillBasket3Fill className="icono" />
    <span> {cartCount}</span>
    </Link>

);
}
export default CartWidget