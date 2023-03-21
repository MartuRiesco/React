import { createContext, useState } from "react";
const cartContext = createContext({
    cart: [],
});
function CartContextProvider(props){
   const [cart, setCart]= useState([])
function addItem (Prod, count){
   const newCart = [...cart];
Prod.count=count;
newCart.push(Prod);
   setCart(newCart);
   }

   function removeItem(id){
      const itemId = id
      cart= cart.filter((item)=> item.id !== itemId)
   }
   function getCountInCart() {
      let total = 0;
      cart.forEach((item) => total + item.count);
      return total;
    }

    return (
       < cartContext.Provider value={{cart, addItem, removeItem, getCountInCart}} > {props.children}</cartContext.Provider>
    )
};
export {CartContextProvider};
export default cartContext;