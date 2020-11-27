import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Logo from './reciclar-senal.png'

export default function Navegation () {
  return (

    <Container className='p-0' fluid={true}>
      <NavBar className='shadow mb-5 bg-dark rounded' variant='dark' expand='lg'>
        <NavBar.Brand className='pl-2 font-weight-light'>
          <img className='m-2' src={Logo} width='25' height='25'/>
          Reciclapp
          </NavBar.Brand>
        <NavBar.Toggle className='border-0' aria-controls='navbar-toggle'/>
        <NavBar.Collapse id='navbar-toggle'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/nosotros'>Nosotros</Link>
            <Link className='nav-link' to='/contacto'>Contacto</Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      
    </Container>
  )
}