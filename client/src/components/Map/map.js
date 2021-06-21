import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper, Circle} from 'google-maps-react';
import './style.css'
require('dotenv').config();


const mapStyles = {
  height: '50%',
  width: '90vw',  
};
export class MapContainer extends Component {
  

  render(props) {
  
    const image = "./playdateMarker2.png"

    return (

      
      <div id="map-container-google-8" className="z-depth-1-half map-container-5">   
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
      strokeOpacity={0.5}
      strokeWeight={5}
      fillColor='#140a80'
      fillOpacity={0.3}
    />
    {this.props.activity.length ? (this.props.activity.map((data) => (
    // (console.log(res.lat, res.lng))
    
    <Marker 
      position={{lat: data.actLat, lng: data.actLng}}
      key= {`${data.actLat}-${data.actLng}`}
      title={data.description}
      icon={image}
    />    
    ))) : ( null )
  }
    </Map>
    </div>
    
    );
  }
}

// const googleContainer = document.getElementById('map-container-google-8')
// const googleParent = googleContainer.parentElement

// console.log(googleParent)

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg"
})(MapContainer);