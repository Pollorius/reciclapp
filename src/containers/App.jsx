import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GMap from '../components/GMap';
import AboutPage from '../pages/AboutPage.js'

function App () {
  let pos = []
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
        exact path='/'
        render={() => <GMap coord={pos} />}
      />
       <Route
        path='/'
        render={() => <Footer />}
      />
      <Route
        path='/nosotros'
        render={() => <AboutPage />}
      />
    </div>
  );
}

export default App;
