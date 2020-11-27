import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation () {
  return (
    <Container className='p-0' fluid>
      <NavBar className='shadow-lg mb-3' collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <NavBar.Brand href='/home'>ReciclApp</NavBar.Brand>
        <NavBar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />
        <NavBar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/nosotros'>Nosotros</Nav.Link>
            <Nav.Link href='/contacto'>Contacto</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </Container>
  )
}
