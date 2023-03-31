import { BsFillBasket3Fill } from "react-icons/bs";
import './style.css';
import cartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function CartWidget  (){
   const { getCountInCart }= useContext(cartContext)

return(

<Link to='/cart' className="as">
    <BsFillBasket3Fill className="icono" />
    <span className="cuenta"> {getCountInCart()|| ''}</span>
    </Link>

);
}
export default CartWidget