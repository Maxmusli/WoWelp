export default class MapMarker {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses) {
    const businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);

    businesses
      .filter(business => !this.markers[business.id])
      .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness))

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]))
  }

  createMarkerFromBusiness(business) {
    
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      businessId: business.id
    });

    let businessInfo = '<div class="business-info-container">' +
      '<div class="business-info-details">' +
      `<p>${business.name}</p>` +
      `<p>${business.category}</p>` +
      // `<p>${business.city}</p>` +
      '</div>' +
      // `<img src="${business.pictures[0]}"/>` +
      '</div>'


    const infowindow = new google.maps.InfoWindow({
      content: businessInfo,
      disableAutoPan: true
    });

    marker.addListener('mouseover', () => {
      infowindow.open(this.map, marker);
    })

    marker.addListener('mouseout', () => {
      infowindow.close(this.map, marker);
    })

    this.markers[business.id] = marker; 

    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}