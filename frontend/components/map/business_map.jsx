import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})

export default class BusinessMap extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
