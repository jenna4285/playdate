import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function AutoAddress() {
  const [address, setAddress] = React.useState("");
  const { isAuthenticated, user } = useAuth0();
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log('heres the value' + value);
    setAddress(value);
    await API.editUserByEmail({
      email: user.email,
      address: value})
    const handleLatLng = async value => {

    setCoordinates(latLng);
   await API.editUserByEmail({
      email: user.email,
      address: address,
      lat: coordinates.lat,
      lng: coordinates.lng
   })
    }
    
  };


  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input {...getInputProps({ placeholder: "Start typing address..." })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default AutoAddress