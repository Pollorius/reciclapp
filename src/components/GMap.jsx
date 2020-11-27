import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
const API_KEY = 'AIzaSyAT_BlOVkZq6B0MBsXPLJSM4J461UEFuas'
const style = {
  width: '1000px',
  height: '600px'
}

function GMap (props) {
  console.log(props)
  return (
    <div className='map-container'>
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
    </div>
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