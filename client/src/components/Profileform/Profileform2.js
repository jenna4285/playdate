import React, { useState, useEffect, useContext } from "react";
import Kids2 from "../Kids/Kids2";
import API from "../../utils/API"
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { useAuth0 } from "@auth0/auth0-react";
import unitedStates from './unitedstates';
import 'primeflex/primeflex.css';
import './Profileform.css'
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg");


function Profileform2() {

    const { isAuthenticated, user } = useAuth0();

    const [profileInfo, setProfileInfo] = useState({
        // Grabbing user.email from auth0
        // email:"",
        fullname: "",
        username: "",
        address: "",
        city: "",
        unitedState: "",
        zip: "",
        description: ""

    });


    async function handleBtnClick(event) {
        event.preventDefault();
        console.log(profileInfo.username)
        
        const fullAddress = [profileInfo.address, profileInfo.city, profileInfo.unitedState, profileInfo.zip].join(",");
        
        // pass full address to geohook to get lat lon for db
        let lat = "";
        let lng = "";

        function latLon() {
            Geocode.fromAddress(fullAddress).then(
            (response) => {
              let { lat, lng } = response.results[0].geometry.location;
              return(data-lat, data-lng);
              
            },
            (error) => {
              console.error(error);
            }
          )
        };
        await latLon();    
        console.log(data-lat, data-lng);
        
        if (profileInfo.fullname && profileInfo.address && profileInfo.city && profileInfo.unitedState && profileInfo.zip && profileInfo.description) {
            
            API.editUserByEmail({
                //GRABBING INFO FROM STATE
                email: user.email,
                fullname: profileInfo.fullname,
                address: profileInfo.address,
                city: profileInfo.city,
                unitedState: profileInfo.unitedState,
                zip: profileInfo.zip,
                description: profileInfo.description,
                picture: user.picture,
                lat: lat,
                lng: lng,
                })
                // .then(() => setProfileInfo({
                //     username: "",
                //     password: "",
                // }))
                .then(() => console.log("profile edited"))
                // .then(() => window.location.href = "/dashboard")
                .catch(err => console.log(err));
        }
    }

    useEffect(() => {

    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setProfileInfo({ ...profileInfo, [name]: value })
    }


    return (

            <div className="row">
                <div className="col">
                    <form>
                        <br />
                        <div>
                            <div className="card">
                                <h1>Edit Main User/Family Profile</h1><br />
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputText name="fullname" type="text" className="form-control" value={profileInfo.name} id="profilename" onChange={handleInputChange} placeholder="Enter Name Here"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Street Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputText name="address" type="text" className="form-control" value={profileInfo.address} id="profilestreetaddress" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputText name="city" type="text" className="form-control" value={profileInfo.city} id="profilecity" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <Dropdown name="unitedState" value={profileInfo.unitedState} options={unitedStates} onChange={handleInputChange} placeholder="Select a State" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Zipcode</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputText name="zip" type="text" className="form-control" value={profileInfo.zip} id="profilezip" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Bio</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-users"></i>
                                                </span>
                                                <InputTextarea name="description" id="bio" rows={3} cols={35} value={profileInfo.description} onChange={handleInputChange} placeholder="Tell us a little about your family!" />
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9 text-secondary">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <button id="save-profile" type="button" className="btn btn-success px-4 gap-3"
                                            disabled={!(profileInfo.fullname && profileInfo.address && profileInfo.city && profileInfo.unitedState && profileInfo.zip && profileInfo.description)}
                                            onClick={handleBtnClick}>Save Profile</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


    )
}

export default Profileform2;