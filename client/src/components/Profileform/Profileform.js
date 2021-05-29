import React, { useState, useEffect } from "react";
import Kids from "../Kids/Kids";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import unitedStates from './unitedstates';
import 'primeflex/primeflex.css';
import './Profileform.css'


function Profileform() {

    const [unitedState, setUnitedState] = useState();

    
    return (
        <form className="container-fluid">
            <container class="container">
                <h1>Profile Information:</h1><br></br>
            </container>

            <div className="p-grid p-fluid">
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="address">Street Address</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-home"></i>
                        </span>
                        <InputTextarea id="address" type="text" rows="1" />

                    </div>

                </div>
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="city">City</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-map-marker"></i>
                        </span>
                        <InputText id="city" type="text" />
                    </div>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="state">State</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-map"></i>
                        </span>
                        <Dropdown value={unitedState} options={unitedStates} onChange={(e) => setUnitedState(e.value)} placeholder="Select a State" />
                    </div>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="zipcode">Zipcode</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-th-large"></i>
                        </span>
                        <InputText id="zipcode" type="text" />
                    </div>
                </div>

                <Kids />
            </div>
        </form>
    )
}

export default Profileform;