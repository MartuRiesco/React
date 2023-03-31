import React from 'react'
import './style.css'
import Accordion from 'react-bootstrap/Accordion';

function Preguntas() {
  return (
    <div className='preguntas'>
        <div className='preguntas-cuest'>
    <h2>Preguntas Frecuentes</h2>
    <section className='acordion'>
    <Accordion flush>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>¿Cómo pago?</Accordion.Header>
        <Accordion.Body>
          Al completar el formulario de compra te estara llegando un mail en tu casilla con los datos para realizar la transferencia.
          Una vez hecha, nos envias el comprobante y ya despachamos tu pedido!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cuándo me llega?</Accordion.Header>
        <Accordion.Body>
          Al enviar la transferencia automaticamente despachamos tu pedido, si elegiste la opcion de correo argentino te estará llegando de 7 a 10 dias hábiles.
          Si elegiste moto/envio Express te llegará de 3 a 5 dias hábiles
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="">
        <Accordion.Header>¿Dónde lo retiro?</Accordion.Header>
        <Accordion.Body>
          Podes retirarlo por nuestra tienda en AV siempreviva 123 de Lunes a Viernes de 10hs a 18hs 
          o Sabados y Domingos de 8hs a 13hs
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</section>
    </div>
    </div>
  )
}

export default Preguntas 