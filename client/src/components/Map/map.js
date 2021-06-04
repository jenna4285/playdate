import React, { Component } from 'react';
import { Marker, withGoogleMap, Map, GoogleApiWrapper, Circle} from 'google-maps-react';
// import UserContext from '../../utils/userContext';
import './style.css'
require('dotenv').config();


const mapStyles = {
  height: '60%',
  width: '90vw',  
};
export class MapContainer extends Component {
  

  render(props) {
    // bring in activities array
    console.log("Map Prop", this.props.activity); 
    
    const google=this.props.google
    
    const uluru = new google.maps.LatLng(this.props.lat, this.props.lng)

    return (

      <div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        uluru={uluru}
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
    {this.props.activity.length ? (this.props.activity.map((data) => (
    // (console.log(res.lat, res.lng))
    
    <Marker 
      position={{lat: data.actLat, lng: data.actLng}}
      key= {`${data.actLat}-${data.actLng}`}
      title={data.description}
    />    
    ))) : ( null )
  }
    </Map>
    </div>
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);