import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom';

function DetallesCompra() {
    const params =  useParams();
    const idItem= params.idItem
  return (
    <div className='compra'>
      <section className='detalles-compra'>
        <h2>⭐🏆🥇 Gracias por elegir la tienda de los campeones del mundo! 🥇🏆⭐</h2>
        <h3> Tu numero de orden es: {idItem}</h3>
      <h3>Proximamente te llegara un mail a tu casilla con los datos para realizar la transferencia!</h3>
  
        </section>
    </div>
  )
}

export default DetallesCompra