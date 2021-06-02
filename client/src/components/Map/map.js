import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper,} from 'google-maps-react';
import UserContext from '../../utils/userContext';
require('dotenv').config();

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  render(props) {
    console.log("look here", this.props)
    return (
    // {if (props.lat && props.lng) }
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={
          {
            lat: this.props.lat,
            lng: this.props.lng
          }
        }
      />
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);