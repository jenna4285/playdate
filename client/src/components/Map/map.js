import React, { Component } from 'react';
import { Marker, withGoogleMap, Map, GoogleApiWrapper, Circle} from 'google-maps-react';
// import UserContext from '../../utils/userContext';
import './style.css'
require('dotenv').config();


const mapStyles = {
  height: '50%',
  width: '90vw',  
};
export class MapContainer extends Component {
  

  render(props) {
    // bring in activities array
    const activities = [{lat: 30.2664531, lng: -97.7688115 }, {lat: 30.2580377, lng: -97.7351679}, {lat: 30.1836487, lng:-97.72219439999999} ]

    const image = "./playdateMarker.png"

    return (

      <div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.props.lat,
            lng: this.props.lng
          }
        }
      >
      <Circle
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
    />
    {activities.map((res => 
    // (console.log(res.lat, res.lng))
    <Marker 
      position={{lat: res.lat, lng: res.lng}}
      key= {`${res.lat}-${res.lng}`}
      title={res.description}
      icon={image}

    />    
    ))}
    </Map>
    </div>
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);