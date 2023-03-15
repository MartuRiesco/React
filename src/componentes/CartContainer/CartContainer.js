import React, { useContext } from 'react'
import cartContext from '../../context/CartContext'

function CartContainer() {
    const {cart}= useContext(cartContext)
  return (
    <div>
    <h1> Tu carrito</h1>
    {cart.map(item=>{<>
       <p> Producto: {item.name}</p>
       <p> Cantidad: {item.count}</p>
       <img src={item.img}></img>
       <p>Total: {item.price* item.count}</p>
       </>
    })}

    </div>
  )
}

export default CartContainer