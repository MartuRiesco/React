import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({img, name, description, price, stock}) {
  return (
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>Producto:{name}</Card.Title>
        <Card.Text>{description}
        </Card.Text>
        <Card.Text>${price}
        </Card.Text>
        <Card.Text> Stock: {stock}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>)
  ;
}


export default Cards;