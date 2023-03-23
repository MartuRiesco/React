import React, { useContext } from 'react'

import cartContext from '../../context/CartContext'
import ChekoutCart from './ChekoutCart'
import './style.css'

function CartContainer() {
    const {cart, removeItem, clearCart, getPriceInCart}= useContext(cartContext)

    
    if(cart.length=== 0)
    return(<div> <h1 className='titu'> Tu carrito</h1>
      <h2>No hay nada en tu carrito aún!</h2></div>)
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
          <th>Precio x item</th>
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
          <td><button className='sum'>+</button>{item.count}<button className='res'>-</button></td>
          <td><button className='res' onClick={()=> removeItem(item.id) }> Remove </button></td>
          <td>${item.price}</td>
          <td>${item.count*item.price}</td>
        </tr>
         
       
     
        );
        
    })}</tbody>
</table>
<button onClick={clearCart}>Vaciar Carrito</button>
<ChekoutCart cart={cart} total={getPriceInCart()}/>
    </div>
    
  );
}

export default CartContainer