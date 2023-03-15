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

    return (
       < cartContext.Provider value={{cart, addItem}} > {props.children}</cartContext.Provider>
    )
};
export {CartContextProvider};
export default cartContext;