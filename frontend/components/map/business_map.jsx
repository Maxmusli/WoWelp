import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // SF coords
  zoom: 13
}

export default class BusinessMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions)
  }

  render() {
    return (
      <div ref={map => this.mapNode = map}>
        
      </div>
    )
  }
}
