import React, { Component } from 'react';
import { withGoogleMap, Map, GoogleApiWrapper,} from 'google-maps-react';
// import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const mapStyles = {
  width: '100%',
  height: '100%'
};

// const myMap = withScriptjs(withGoogleMap((props) => (<GoogleMap />)));

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
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
  apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(MapContainer);