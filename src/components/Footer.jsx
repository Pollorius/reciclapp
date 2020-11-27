import React from 'react';


export default function Footer(){
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light" >
            <div className='p-0' md={3} sm={12}>
                Reciclapp
            </div>
            <div className='p-0 d-flex justify-content-center'>
                <small>Made with ♥ by <a className="text-decoration-none" href="http://www.github.com/Pollorius"> Pollorius </a>
                </small>
            </div>
            
        </nav>
    )
}
