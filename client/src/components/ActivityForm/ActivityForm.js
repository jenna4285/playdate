import React, { useState, useEffect, useContext, useRef } from "react";
import API from "../../utils/API"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { useAuth0 } from "@auth0/auth0-react";
import 'primeflex/primeflex.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import './ActivityForm.css'


function ActivityForm() {

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
      setCoordinates(latLng);
      setAddress(value);
    };

    const descriptionRef = useRef();
    const locationRef = useRef();

    const [activityInfo, setActivityInfo] = useState({
        // Grabbing user.email from auth0
        // email:"",
        hostName: "",
        date: "",
        description: "",
        location: "",
        lat: "",
        lng: ""

    });

    const op = useRef(null);
    console.log('op' + op)

    function saveToDatabase(e) {
             API.saveActivity({
                //GRABBING INFO FROM STATE
                hostName: user.email,
                description: descriptionRef.current.value,
                date: activityInfo.date,
                location: locationRef.current.value,
                actLat: coordinates.lat,
                actLng: coordinates.lng
            })
                .then(() => console.log("activity added"))
                .catch(err => console.log(err)); 
    }

    function handleInputChange(event) {
        const { name, value } = event.target
        setActivityInfo({ ...activityInfo, [name]: value })
    }


    return (

        <div className="row">
            <div className="col">
            <div className="d-flex justify-content-center">
            {/* this button opens the modal */}
                <Button id="add-activity-btn" type="button" label="Add an Activity!" onClick={(e) => op.current.toggle(e)} />
            </div>
            {/* what's in this OverlayPanel is hidden until toggled on/off */}
                <OverlayPanel dissmissable ref={op}>
                    <form>
                        <div>
                            <div className="card">
                                <div className="row mb-3">
                                    <div>
                                        <h3 className="mb-0">Activity Details</h3>
                                    </div>
                                    <div className="ActAutoAddress">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
              
              
              {/* tried to put an API call here to hit mongoDB */}
              <InputTextarea {...getInputProps({ placeholder: "Where is this taking place?" })} 
                                                      name="location"
                                                      ref={locationRef}
                                                      onSelect={handleInputChange}
                                                      className="width-100"
                                                      />
<p>Selected address: {address}</p>
<p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>
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
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="text-secondary">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-users"></i>
                                        </span>
                                        <InputTextarea 
                                            name="description" 
                                            id="bio" rows={3} cols={35} 
                                            ref={descriptionRef} 
                                            placeholder="What are you up to?" />
                                    </div>
                                    <div className="row mb-3 pad-20">
                                        <Calendar 
                                        name="date"
                                        value={activityInfo.date} 
                                        onChange={handleInputChange}
                                        placeholder="When is this activity?"
                                        />
                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button id="save-activity" type="button" className="btn btn-success px-4 gap-3"
                                        onClick={saveToDatabase} 
                                            >Save Activity</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </OverlayPanel>


            </div>
        </div>


    )
}

export default ActivityForm;