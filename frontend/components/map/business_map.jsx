import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapMarker from '../../util/map_marker';

// let getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });

// const mapOptions = {
//   center: {
//     lat: 37.773972,
//     lng: -122.431297
//   }, // SF coords
//   zoom: 11
// }

class BusinessMap extends Component {
  componentDidMount() {
    let center;
    let zoom;

    if (this.props.businesses.length >= 1) {
      
      let lats = this.props.businesses.map(business => {business.lat});
      let sumLats = lats.reduce((acc, ele) => acc + ele);
      let avgLat = sumLats / this.props.businesses.length;

      let lngs = this.props.businesses.map(business => {business.lng});
      let sumLngs = lngs.reduce((acc, ele) => acc + ele);
      let avgLng = sumLngs / this.props.businesses.length;

      center = { lat: avgLat, lng: avgLng };
      zoom = 11;
    } else if (this.props.business) {
      center = { lat: this.props.business.lat, lng: this.props.business.lng };
      zoom = 15;
    }

    const mapOptions = {
      center: center,
      zoom: zoom,
    }
    

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MapMarker = new MapMarker(this.map, this.handleMarkerClick.bind(this));
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  handleMarkerClick(business) {
    this.props.history.push(`search/${business.id}`);
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