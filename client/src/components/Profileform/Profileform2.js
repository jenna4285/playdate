import React, { useState, useEffect } from "react";
import Kids2 from "../Kids/Kids2";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import unitedStates from './unitedstates';
import 'primeflex/primeflex.css';
import './Profileform.css'


function Profileform2() {

    const [profileInfo, setProfileInfo] = useState({
        fullname: "", 
        address:"",
        city:"",
        unitedState:"",
        zip:"",
        description:""

    });
    const [unitedState, setUnitedState] = useState({});
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [description, setDescription] = useState();

    function handleInputChange(event) {
        const { name, value } = event.target
        setProfileInfo({ ...profileInfo, [name]: value })
    }


    return (
        <form classNameName="container-fluid">
            <br />
            <container classNameName="title">
                <h1>Edit Main User/Family Profile</h1><br />
            </container>
            <div classNameName="p-d-flex p-jc-center">

                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText name="fullname" type="text" className="form-control" value={name} id="profilename" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Street Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText name="address" type="text" className="form-control" value={address} id="profilestreetaddress" onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">City</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText name="city" type="text" className="form-control" value={city} id="profilecity" onChange={handleInputChange}/>
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
                                    <InputText name="zip" type="text" className="form-control" value={zip} id="profilezip" onChange={handleInputChange}/>
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
                                        <InputTextarea name="description" id="bio" rows={3} cols={30} value={description} onChange={handleInputChange} placeholder="Tell us a little about your family!" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" className="btn btn-primary px-4" value="Save Changes" />
                                        </div>
                                    </div>
                                </div>
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



