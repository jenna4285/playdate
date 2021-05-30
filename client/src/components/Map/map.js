import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper,} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
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
  apiKey: 
})(MapContainer);