import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function AutoAddress() {
  const [address, setAddress] = React.useState("");
  const { user } = useAuth0();
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
// added in API route to hit DB
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setAddress(value);
    await API.editUserByEmail({
      email: user.email,
      address: value,
      lat: latLng.lat,
      lng: latLng.lng
    })
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
              {!(coordinates.lat) ? (null) : ( <div>
                <p>Selected Address: {address}</p>

              </div> )}
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description} {console.log('object' + suggestion)}
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