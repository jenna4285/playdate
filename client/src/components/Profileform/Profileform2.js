import React, { useState, useEffect } from "react";
import Kids2 from "../Kids/Kids2";
import API from "../../utils/API"
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import unitedStates from './unitedstates';
import 'primeflex/primeflex.css';
import './Profileform.css'


function Profileform2() {

    const [profileInfo, setProfileInfo] = useState({
        // MAYBE STORE FROM SESSION HERE
        fullname: "",
        address: "",
        city: "",
        unitedState: "",
        zip: "",
        description: ""

    });

    function handleBtnClick(event) {
        event.preventDefault();
        console.log(profileInfo.username)
        if (profileInfo.fullname && profileInfo.address && profileInfo.city && profileInfo.unitedState && profileInfo.zip && profileInfo.description) {
            API.editUser({
                //GRAB THIS ID FROM SESSION STORAGE
                id: "60b2da808cff5559c03e8ac7",
                fullname: profileInfo.fullname,
                address: profileInfo.address,
                city: profileInfo.city,
                unitedState: profileInfo.unitedState,
                zip: profileInfo.zip,
                description: profileInfo.description,
            })
                // .then(() => setProfileInfo({
                //     username: "",
                //     password: "",
                // }))
                .then(() => console.log("profile edited"))
                .then(() => window.location.href = "/dashboard")
                .catch(err => console.log(err));
        }
    }

    useEffect(() => {

    })
    // const [unitedState, setUnitedState] = useState({});
    // const [name, setName] = useState();
    // const [address, setAddress] = useState();
    // const [city, setCity] = useState();
    // const [zip, setZip] = useState();
    // const [description, setDescription] = useState();

    function handleInputChange(event) {
        const { name, value } = event.target
        setProfileInfo({ ...profileInfo, [name]: value })
    }


    return (
        <form classNameName="container-fluid">
            <br />
            <div classNameName="p-d-flex p-jc-center">

                <div className="col-lg-6">
                    <div className="card">
                        <h1>Edit Main User/Family Profile</h1><br />
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText name="fullname" type="text" className="form-control" value={profileInfo.name} id="profilename" onChange={handleInputChange} />
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
                                    <span classNameName="p-inputgroup-addon">
                                        <i classNameName="pi pi-map"></i>
                                    </span>
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
                                    <div classNameName="p-inputgroup">
                                        <span classNameName="p-inputgroup-addon">
                                            <i classNameName="pi pi-users"></i>
                                        </span>
                                        <InputTextarea name="description" id="bio" rows={3} cols={30} value={profileInfo.description} onChange={handleInputChange} placeholder="Tell us a little about your family!" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                        </div>
                                    </div>
                                </div>
                                            
                            </div>
                            <div className="row">
                            <button id="create-profile" type="button" class="btn btn-success px-4 gap-3"
                                                disabled={!(profileInfo.fullname && profileInfo.address && profileInfo.city && profileInfo.unitedState && profileInfo.zip && profileInfo.description)}
                                                onClick={handleBtnClick}>Save Profile</button>
                            </div>

                        </div>
                    </div>
                    <Kids2 />
                </div>
            </div>
        </form>
    )
}

export default Profileform2;