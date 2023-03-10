import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';
import {Link} from 'react-router-dom';


function Menu () {
  return (
    <Navbar  expand="lg" className='nave'>
      <Container className='nav'>
        <Navbar.Brand > </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  nav">
            <Nav.Link> <Link className='navb' to='/'>Home</Link></Nav.Link>            
            <NavDropdown title="Calzado" id="basic-nav-dropdown">
              <NavDropdown.Item  ><Link className='navb' to='categoria/Botines'>Botines</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='navb' to='categoria/Ojotas'> Ojotas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='navb' to='categoria/Zapatillas'>Zapatillas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link  className='navb'to='categoria/Medias'>Medias</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link  className='navb' to='categoria/Remeras'>Remeras</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  className='navb' to='categoria/Camisetas'>Camisetas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='navb' to='categoria/BuzosyCamperas'> Buzos y Camperas</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link className='navb' to='categoria/ShortsyPantalones'> Shorts y pantalones</Link> </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link className='navb' to='/Accesorios'>Accesorios</Link></Nav.Link>
            <Nav.Link ><Link  className='navb' to='/Contacto'>Contacto</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;