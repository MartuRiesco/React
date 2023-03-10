import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css' 
import { Link } from 'react-router-dom';

const Item = ({prod})=>{
    return(   <Link to={`/detalle/${prod.id}`} className='texto' > <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.img}  className= 'ima' alt={prod.name} />
    <Card.Body>
      <Card.Title className='texto'>Producto: {prod.name}</Card.Title>
      <Card.Text className='texto'> {prod.description}
      </Card.Text>
      <Card.Text className='texto'>${prod.price}
      </Card.Text>
      <Card.Text className='texto'> Stock: {prod.stock}
      </Card.Text>
    <Button variant="primary" className='texto'>Ver más</Button>
    </Card.Body>
  </Card></Link>)
;

    
}
export default Item