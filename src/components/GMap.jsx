import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const API_KEY = 'AIzaSyAT_BlOVkZq6B0MBsXPLJSM4J461UEFuas'
const style = {
  width: '1000px',
  height: '600px'
}

function GMap (props) {
  console.log(props)
  return (
    <Container fluid={true} >
      <Row className='justify-content-center'>
        <Col md={10}>
            <Map
            google={props.google}
            zoom={18}
            initialCenter={{
              lat: props.coord[0],
              lng: props.coord[1]
            }}
            style={style}
          />
          <Marker />

        </Col>
      </Row>
    </Container>
      
    
  )
}

// class GMap extends Component {
//   render () {
//     return (
//       <div className='map-container'>
//         <Map google={this.props.google} style={style} />
//       </div>
//     )
//   }
// }

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(GMap)