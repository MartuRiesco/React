import React from 'react'
import { createOrder } from '../../services/firestore'

function ChekoutCart({cart, total}) {

    function handleCheckout(){
      const orderData={
        buyer:{name:"carlos", phone: "123123", email:"martu@martu.com"},
        items:cart,
        total: total,
        timestamp:new Date(),
      }
      createOrder(orderData)
    }
  return (
    <div>
        <button onClick={handleCheckout}>Terminar compra</button>
    </div>
  )
}

export default ChekoutCart