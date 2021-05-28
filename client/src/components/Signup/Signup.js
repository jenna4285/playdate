import React from "react";
import { InputText } from 'primereact/inputtext';

function Signup() {
    return(
        
<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="firstname6">Firstname</label>
        <InputText id="firstname6" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" />
    </div>
     <div className="p-field p-col-12 p-md-6">
        <label htmlFor="lastname6">Email</label>
        <InputText id="email" type="email" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="password6">Password</label>
        <InputText id="password" type="password" />
</div>
</div>
 
    )
}


export default Signup;