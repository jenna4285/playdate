import React, { useState, useEffect, useRef} from "react";
import API from "../../utils/API"
import {Toast} from "primereact/toast";

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useAuth0 } from "@auth0/auth0-react";
import 'primeflex/primeflex.css';
import './Profileform.css'
import Geocode from "react-geocode";
import AutoAddress from "./AutoAddress";

Geocode.setApiKey("AIzaSyAQACrt018ybMocp5ofJnmPmB7XPiX23Yg");


function Profileform2() {
    const toast = useRef(null);

    const { isAuthenticated, user } = useAuth0();

    const [profileInfo, setProfileInfo] = useState({
        // Grabbing user.email from auth0
        // email:"",
        fullname: "",
        description: "",
        address:""
    });


    function saveToDatabase(){
        if (profileInfo.fullname && profileInfo.description) {
            
            API.editUserByEmail({
                //GRABBING INFO FROM STATE
                email: user.email,
                fullname: profileInfo.fullname,
                description: profileInfo.description,
                picture: user.picture,
                //address: profileInfo.address,
                // lat: latLng.lat,
                // lng: latLng.lng
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

    function displaySuccess(){
        toast.current.show({severity:'success', summary: 'Success!', detail:'Profile Saved!', life: 3000});
        }

    function handleBtnClick(event) {
        event.preventDefault();
        displaySuccess()
        console.log(profileInfo.username)
        saveToDatabase();
    }

    useEffect(() => {

    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setProfileInfo({ ...profileInfo, [name]: value })
    }


    return (

            <div className="row">
            <Toast ref={toast}/>
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
                                            <InputText 
                                            name="fullname" 
                                            type="text" 
                                            className="form-control" 
                                            value={profileInfo.name} 
                                            id="profilename" 
                                            onChange={handleInputChange} placeholder="Enter Name Here"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <AutoAddress />
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
                                            disabled={!(profileInfo.fullname && profileInfo.description)}
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