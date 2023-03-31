import React from 'react'
import './style.css'

function Contacto() {
  return (
    <div className='contacto'>
        <div className='contac'>
        <h2>¿Tuviste algun inconveniente? ¿No te llego el pedido?</h2>
        <div className='contacto-contacto'>
        <section className='contacto-titulo'>
            <h2>Contacto:</h2>
            <p> 📞 Comunicate con nosotras al: +54 1234567894</p>
            <p>📩 Envianos un mail a tresestrellas@gmail.com</p>
        </section>
        <section className='contacto-medios'>
           <h2>Acercate! Av Siempreviva 123</h2>
           <p>🕓 De Lunes a Viernes de 10hs a 18hs</p>
           <p>🕓 Sabados y Domingos de 8hs a 13hs</p>
        </section>
        </div>
        </div>
        </div>
  )
}

export default Contacto