import Card from 'react-bootstrap/Card';
import './style.css' 
import { Link } from 'react-router-dom';
import ButtonList from '../Button/ButtonList';


const Item = ({prod})=>{
    return(  <div className='item-list trans'> <Link to={`/detalle/${prod.id}`} className='texto' > <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.img}  className= 'ima' alt={prod.name} />
    <Card.Body>
      <Card.Title className='texto'>{prod.description}</Card.Title>
      <Card.Text className='texto'>${prod.price}
      </Card.Text>
      <Card.Text className='texto'> Stock: {prod.stock}
      </Card.Text>
      < ButtonList />
    </Card.Body>
  </Card></Link></div>)
;

    
}
export default Item