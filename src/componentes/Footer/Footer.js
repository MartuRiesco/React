import React from 'react'
import './style.css'
import {  BsInstagram, BsFacebook,BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
    <section  className='pagos'>

   <Link to='/'> <img src={'https://i.imgur.com/wJCUQka.png'}  alt='logo' className='log'></img></Link>
  <div className='opc'>
    <button className='btn-footer'>Nosotras</button>
<Link to='/categoria/Contacto'><button className='btn-footer'>Contacto</button></Link>
 <Link to='/Tiendas'> <button className='btn-footer'>Tiendas</button></Link>
  <Link to='/Preguntas'><button className='btn-footer'>Preguntas frecuentes</button></Link>

  
  </div>
  <div className='redes'>
    <h4 className='red'>Encontranos en las redes!</h4>
    <section className='iconos'>
    <button className='btn-footer infor'><BsInstagram/></button>
    <button className='btn-footer infor'> <BsFacebook/></button>
    <button className='btn-footer infor'>  <BsTwitter/></button>
    </section>

  </div>
    
    </section>
    <h4 className='fut'>Copyright © 2023 - Aplicación web desarrollada por  Martina Riesco</h4>
    </footer>
  )
}

export default Footer