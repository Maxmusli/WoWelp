import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapMarker from '../../util/map_marker';

// let getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // SF coords
  zoom: 11
}

class BusinessMap extends Component {
  componentDidMount() {
    
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MapMarker = new MapMarker(this.map, this.handleMarkerClick.bind(this));
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  handleMarkerClick(business) {
    this.props.history.push(`businesses/${business.id}`);
  }

  render() {
    if (!this.props.businesses) return null;

    return (
      <div className="map" ref="map">
        Map
      </div>
    )
  }
}

export default withRouter(BusinessMap)