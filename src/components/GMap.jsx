import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function GMap (props) {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{
        lat: props.coords[0],
        lng: props.coords[1]
      }}
    />
  )
}

export default withScriptjs(
  withGoogleMap(
    GMap
  )
)
