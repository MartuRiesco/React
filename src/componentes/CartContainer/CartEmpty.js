import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function CartEmpty() {
  return (
    <div className='cart-empty'>
      <section className='cart-empty-container'>
        <h1 className='titu'> Tu carrito</h1>
        <h2>No hay nada en tu carrito aún!</h2>
        <button className='bot '><Link to='/'  className='tex'> Ir a la tienda</Link></button></section>
        </div>
  )
}

export default CartEmpty