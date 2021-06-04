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
   
    console.log("Map Prop", this.props.activity); 


    const image = "./playdateMarker.png"

    return (

      <div className="MapContainer">
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
      radius={200}
      center={{lat: this.props.lat,
        lng: this.props.lng}}
      // onMouseover={() => console.log('mouseover')}
      // onClick={() => console.log('click')}
      // onMouseout={() => console.log('mouseout')}
      strokeColor='transparent'
      strokeOpacity={0}
      strokeWeight={5}
      fillColor='#140a80'
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