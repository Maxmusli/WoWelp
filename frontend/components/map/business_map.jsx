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
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    
    return (
      <div className="map" ref="map">
        Map
      </div>
    )
  }
}
