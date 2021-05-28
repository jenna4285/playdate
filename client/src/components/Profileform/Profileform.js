import React from "react";
import 'primeflex/primeflex.css';
import Kids from "../Kids/Kids";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';


function Profileform() {
    return (
        <form className="container-fluid">
            <h1>Profile Information:</h1><br></br>
            <div>
                <div className="p-field p-col-12">
                    <label htmlFor="address">Street Address</label>
                    <InputTextarea id="address" type="text" rows="1" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div className="p-field p-col-6 p-md-6">
                    <label htmlFor="state">State</label>
                    <InputText id="state" type="text" />
                </div>
                <div className="p-field p-col-6 p-md-3">
                    <label htmlFor="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
               <Kids />
            </div>
        </form>
    )
}

export default Profileform;