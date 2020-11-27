import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { Container, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import './Gmap.css'

const API_KEY = 'AIzaSyAT_BlOVkZq6B0MBsXPLJSM4J461UEFuas'

function GMap (props) {
  return (
    <Container fluid>
      <SearchBar />
      <Row className='justify-content-center'>
        <Map
          className='map'
          google={props.google}
          zoom={18}
          initialCenter={{
            lat: props.coord[0],
            lng: props.coord[1]
          }}
        />
      </Row>
    </Container>
  )
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(GMap)
