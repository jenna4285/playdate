import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper, Circle} from 'google-maps-react';
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
      <div>
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
      {/* <Circle
      radius={1200}
      center={{lat: this.props.lat,
        lng: this.props.lng}}
      onMouseover={() => console.log('mouseover')}
      onClick={() => console.log('click')}
      onMouseout={() => console.log('mouseout')}
      strokeColor='transparent'
      strokeOpacity={0}
      strokeWeight={5}
      fillColor='#FF0000'
      fillOpacity={0.2}
    /> */}
    </div>
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);