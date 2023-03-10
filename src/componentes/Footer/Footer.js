import React from 'react'
import './style.css'

function Footer() {
  return (
    <footer>
    <section  className='pagos'>
    <img src={process.env.PUBLIC_URL + '/img/iconoAmex.png'} alt='american express' className='pago'></img>
    <img src={process.env.PUBLIC_URL + '/img/iconoMASTER.png'} alt='mastercard' className='pago'></img>
    <img src={process.env.PUBLIC_URL + '/img/iconoMP.png'} alt='mercado pago' className='pago'></img>
    <img src={process.env.PUBLIC_URL + '/img/iconoVISA.png'} alt='visa' className='pago'></img>
    <h2 className='fut'>Site by Martina riesco</h2>
    </section>
    </footer>
  )
}

export default Footer