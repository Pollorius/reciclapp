import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GMap from '../components/GMap'

function App () {
  const pos = []
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos.push(position.coords.latitude, position.coords.longitude)
    })
  }
  return (
    <div className='App'>
      <Route
        path='/'
        render={() => <Nav />}
      />
      <Route
        path='/'
        render={() => <Footer />}
      />
      <Route
        path='/home'
        render={() => <GMap coord={pos} />}
      />
    </div>
  )
}

export default App
