import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Menu(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
       
          <Nav className="me-auto nav" navbar>
            <NavItem>
              <NavLink > <Link className='navb' to='/'>Home</Link></NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='navbar'>
                Calzado
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link className='navb' to='categoria/Botines'>Botines</Link></DropdownItem>
                <DropdownItem><Link className='navb' to='categoria/Ojotas'> Ojotas</Link></DropdownItem>
                <DropdownItem><Link className='navb' to='categoria/Zapatillas'>Zapatillas</Link></DropdownItem>
                <DropdownItem><Link  className='navb'to='categoria/Medias'>Medias</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ropa
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link  className='navb' to='categoria/Remeras'>Remeras</Link></DropdownItem>
                <DropdownItem><Link  className='navb' to='categoria/Camisetas'>Camisetas</Link></DropdownItem>
                <DropdownItem><Link className='navb' to='categoria/BuzosyCamperas'> Buzos y Camperas</Link> </DropdownItem>
                <DropdownItem><Link className='navb' to='categoria/ShortsyPantalones'> Shorts y pantalones</Link> </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink >
              <Link className='navb' to='categoria/Accesorios'>Accesorios</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
              <Link  className='navb' to='categoria/Contacto'>Contacto</Link>
              </NavLink>
            </NavItem>
          </Nav>
      </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;