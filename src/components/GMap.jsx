import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Container, Row } from 'react-bootstrap'
import './Gmap.css'
import Shops from './Shops'

const API_KEY = 'AIzaSyAT_BlOVkZq6B0MBsXPLJSM4J461UEFuas'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function GMap (props) {
  const classes = useStyles()

  return (
    <div>
      <div>
        <Container fluid>
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
      </div>
      {/* <div className='border border-success'>
        <Container>
          <Row>

            <Shops />
          </Row>
        </Container>
      </div> */}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(GMap)
