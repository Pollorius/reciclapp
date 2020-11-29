import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GMap from '../components/GMap'
import Shops from '../components/Shops'

function App () {
  const pos = []
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos.push(position.coords.latitude, position.coords.longitude)
    })
  }
  return (
    <div className='d-flex flex-column justify-content-center'>
      <div className='order-0'>
        <Route
          path='/'
          render={() => <Nav />}
        />
        <Route
          path='/'
          render={() => <GMap coord={pos} />}
        />
        <Route
          path='/'
          render={() => <Footer />}
        />
      </div>
      <div className='justify-content-center'>
        <Route
          path='/'
          render={() => <Shops />}
        />
      </div>
    </div>
  )
}

export default App
