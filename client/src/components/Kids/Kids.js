import React from "react";
import { InputText } from 'primereact/inputtext';
// import { MultiSelect } from 'primereact/multiselect';

function Kids() {
    return (
        <form className="container-fluid">
            <h2>Kid Info!</h2>

            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-6 p-md-6">
                    <label htmlFor="kidname">Kiddo Name</label>
                    <InputText id="kidname" type="text" />
                </div>
                <div className="p-field p-col-6 p-md-6">
                    <label htmlFor="kidage">Kiddo Age</label>
                    <InputText id="kidage" type="integer" />
                 </div>
                 </div>
                 {/* Kiddo interest for matching in the future */}
            {/* <div className="p-fluid p-formgrid p-grid" */}
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" id="addchild">Add Child</button>
            <br></br>
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" id="familycomplete">Family Complete</button>
        </form>



    )
}

export default Kids;