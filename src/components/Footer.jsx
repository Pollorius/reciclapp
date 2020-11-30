import React from 'react'
import './Gmap.css'; 
import Logo from './reciclar-senal.png'

export default function Footer () {
  return (
    <footer className='navbar fixed-bottom mt-5 bg-light'>
      <div>
        <img src={Logo} width='20' height='20' className='mr-1'/>
      <small className='Fonts2 font-italic'>ECO RESUELTO</small>
      </div>
      <div>
      <small className='Fonts2'>Made with ♥ by <a className='linkA' href='http://www.github.com/Pollorius'> Pollorius </a> 
      </small>
      <small className='Fonts2'> and <a className='linkA' href='http://www.github.com/florenramirez'> Floren </a> 
      </small>
      </div>


    </footer>
  )
}

