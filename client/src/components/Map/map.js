import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper, Circle, Marker} from 'google-maps-react';
require('dotenv').config();

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {


  render() {
    const coords = { lat: 30.2672, lng: -97.7431 };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={coords}
        
      >

  <Marker
    title={'3352 Something Ave'}
    name={'Home'}
    position={coords} />

       <Circle
        radius={1200}
        center={coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
       </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);