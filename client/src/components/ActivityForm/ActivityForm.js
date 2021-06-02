import React, { useState, useEffect, useContext, useRef } from "react";
import API from "../../utils/API"
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { useAuth0 } from "@auth0/auth0-react";
import 'primeflex/primeflex.css';
import Geocode from "react-geocode";
import AutoAddress from "../Profileform/AutoAddress"
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import './ActivityForm.css'



Geocode.setApiKey("AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg");


function ActivityForm() {

    const { isAuthenticated, user } = useAuth0();

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

    function saveToDatabase() {
        if (activityInfo.hostName && activityInfo.description && activityInfo.location && activityInfo.date) {

            API.editActivityByEmail({
                //GRABBING INFO FROM STATE
                hostName: "",
                date: "",
                description: "",
                location: "",
                lat: activityInfo.lat,
                lng: activityInfo.lng,
            })
                // .then(() => setProfileInfo({
                //     username: "",
                //     password: "",
                // }))
                .then(() => console.log("activity added"))
                // .then(() => window.location.href = "/dashboard")
                .catch(err => console.log(err));
        }
    }

    function handleBtnClick(event) {
        event.preventDefault();
        console.log(activityInfo.username)

        // const fullAddress = [profileInfo.address, profileInfo.city, profileInfo.unitedState, profileInfo.zip].join(",");

        // pass full address to geohook to get lat lon for db
        let lat = "";
        let lng = "";


        function latLon() {
            Geocode.fromAddress(activityInfo.fullAddress).then(
                (response) => {
                    let { lat, lng } = response.results[0].geometry.location;
                    setActivityInfo({ ...activityInfo, lat, lng });

                },
                (error) => {
                    console.error(error);
                }
            )
        };
        latLon();
        console.log(lat, lng);

        saveToDatabase();

    }

    useEffect(() => {

    })

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
                <OverlayPanel ref={op}>
                    <form>
                        <div>
                            <div className="card">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Event Location</h6>
                                    </div>
                                    <AutoAddress name="fullAddress" type="text" className="form-control" value={activityInfo.fullAddress} id="fullAddress" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Event Description</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-users"></i>
                                        </span>
                                        <InputTextarea name="description" id="bio" rows={3} cols={35} value={activityInfo.description} onChange={handleInputChange} placeholder="What are you up to?" />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date</h6>
                                        </div>
                                        <Calendar />
                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button id="save-activity" type="button" className="btn btn-success px-4 gap-3"
                                            disabled={!(activityInfo.username && activityInfo.fullAddress && activityInfo.date && activityInfo.description)}
                                            onClick={handleBtnClick}>Save Activity</button>
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