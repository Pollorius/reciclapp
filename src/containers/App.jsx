import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import credentials from '../credentials'
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
    <div>
      <Route
        path='/'
        render={() => <Nav />}
      />
      <Route
        path='/'
        render={() =>
          <GMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
            containerElement={<div style={{ height: '400px', display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }} />}
            mapElement={<div style={{ height: '100%', width: '98%' }} />}
            loadingElement={<div style={{ height: '100%' }}> Cargando... </div>}
            coords={pos}
          />}
      />
      <div style={{backgroundColor: 'rgb(51, 102, 51)'}} className='d-flex justify-content-center align-items-center shadow-lg p-2 text-white m-1'>
        <h5 >Comercios Cercanos</h5>
      </div>
      <div style={{ margin: '5px' }}>
        <Route
          path='/'
          render={() => <Shops />}
        />
      </div>
      <Route
        path='/'
        render={() => <Footer />}
      />
    </div>
  )
}

export default App
