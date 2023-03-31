import React from 'react'
import { createOrder } from '../../services/firestore'
import {useNavigate} from 'react-router-dom'
import CheckoutForm from './CheckoutForm'

function ChekoutCart({cart, total, clearCart}) {
const navigateTo = useNavigate()
async function handleCheckout(userData){
      const orderData={
        buyer:userData,
        items:cart,
        total: total,
        timestamp:new Date(),
      };
    const id = await createOrder(orderData)

console.log(orderData)
navigateTo(`/detallesCompra/${id}`)
 clearCart()
    };
  return (
    <div>
        <CheckoutForm onSubmit={handleCheckout}/>
        </div> 
  )
}

export default ChekoutCart