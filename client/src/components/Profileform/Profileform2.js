import React, { useState, useEffect } from "react";
import Kids2 from "../Kids/Kids2";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import unitedStates from './unitedstates';
import 'primeflex/primeflex.css';
import './Profileform.css'


function Profileform2() {

    const [unitedState, setUnitedState] = useState();
    const [description, setDescription] = useState();


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
                                    <input type="text" className="form-control" value="John Doe" id="profilename" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Street Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="555 Street Ave." id="profilestreetaddress" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">City</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="Austin" id="profilecity" />
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
                                    <Dropdown value={unitedState} options={unitedStates} onChange={(e) => setUnitedState(e.value)} placeholder="Select a State" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Zipcode</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value="78702" id="profilezip" />
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
                                        <InputTextarea id="bio" rows={3} cols={30} value={description} onSubmit={(event) => setDescription(event.target.value)} placeholder="Tell us a little about your family!" />
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



