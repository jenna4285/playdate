import React from "react";
import { InputText } from 'primereact/inputtext';
import './Kids.css'
// import { MultiSelect } from 'primereact/multiselect';

function Kids() {
    return (
        <form className="container-fluid">
            <h1>Kids</h1>

            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="child-name">Name</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText id="child-name" type="text" />
                    </div>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <h5 htmlFor="child-age">Age</h5>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-palette"></i>
                        </span>
                        <InputText id="child-age" type="text" />
                    </div>
                </div>
            </div>
            {/* Kiddo interest for matching in the future */}
            {/* <div className="p-fluid p-formgrid p-grid" */}
            <button type="button" class="btn btn-success m-2 px-4 gap-3" id="addchild">Add Child</button>
            <br></br>
            <button type="button" class="btn btn-success m-2 px-4 gap-3" id="familycomplete">Family Complete</button>
        </form>



    )
}

export default Kids;