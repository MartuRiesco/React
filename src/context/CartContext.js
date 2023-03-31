import { createContext, useState } from "react";
const cartContext = createContext({
    cart: [],
});
function CartContextProvider(props){
   const [cart, setCart]= useState([])
function addItem (Prod, count){
   const newCart = [...cart];
   if(isInCart(Prod.id)){
      let index= cart.findIndex(item=> item.id ===Prod.id)
      newCart[index].count =newCart[index].count + count
   }else{
      Prod.count=count;
      newCart.push(Prod);
   }

   setCart(newCart);
   } 
   function removeItem(id){
      
     return   setCart( cart.filter((item)=> item.id !== id))
   }
   function getCountInCart() {
     
      return  cart.reduce((item, itemCount) => item + itemCount.count, 0);
      
    }
    function getPriceInCart() {
      let total=0
      console.log('mi carrito', cart)
      cart.forEach((item)=>total= total+item.count*item.price)
      return total
      
    }
 function isInCart(id){
    return cart.some((item)=>item.id===id)
 }
 function clearCart(){
  return setCart([])
 }
    return (
       < cartContext.Provider value={{cart, addItem, removeItem, getCountInCart, isInCart, clearCart, getPriceInCart}} > {props.children}</cartContext.Provider>
    )
};
export {CartContextProvider};
export default cartContext;