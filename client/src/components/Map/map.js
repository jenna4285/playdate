import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper,} from 'google-maps-react';
require('dotenv').config();

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.2672,
            lng: -97.7431
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);