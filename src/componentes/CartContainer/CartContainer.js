import React, { useContext } from 'react'

import cartContext from '../../context/CartContext'
import CartEmpty from './CartEmpty'
import ChekoutCart from './ChekoutCart'
import './style.css'

function CartContainer() {
    const {cart, removeItem, clearCart, getPriceInCart}= useContext(cartContext)

    
    if(cart.length=== 0)
    return(<div> 
  <CartEmpty></CartEmpty>
          </div>)
  return (
    <div>
      <h1 className='titu'> Tu carrito</h1>
    
    <table className='tabla'>
    <thead>
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Borrar item</th>
         
          <th>Total</th>
          
        </tr>
      </thead>
      <tbody>
    {cart.map((item) =>{
      
    return(
       
     
     
        <tr>
          <td> <img src={item.img} alt={item.name} className='im'></img></td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td><button className=' bot sum'>+</button > <span className='contador'>{item.count} </span><button className=' bot res'>-</button></td>
          <td><button className=' bot res ' onClick={()=> removeItem(item.id) }> Remove </button></td>
         
          <td>${item.count*item.price}</td>
          
          
        </tr>
        
         
       
     
        );
        
    })}
    <tr> <td></td><td></td><td></td><td></td><td> Precio total:</td>
            <td>${getPriceInCart()}</td></tr></tbody>
</table>
<ChekoutCart cart={cart} total={getPriceInCart()} clearCart={clearCart}/>
<div className='vac'>
<button className='bot ' onClick={clearCart}>Vaciar Carrito</button></div>
    </div>
    
  );
}

export default CartContainer