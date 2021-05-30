import React, { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import './Kids.css'
import { Dropdown } from 'primereact/dropdown';
import interests from './interests'


function Kids2() {
    const [kidName, setKidName] = useState();
    const [kidAge, setKidAge] = useState();
    const [interests, setInterests] = useState();

    return (


        <form classNameName="container-fluid">

            <div classNameName="p-d-flex p-jc-center">

                <div id = "kid-form-card" className="card">

                    <h1>Edit Kids</h1>

                    <div className="p-field p-col-12 p-md-12">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText name="kidname" type="text" className="form-control" value={kidName} id="kidname" onSubmit={(event) => setKidName(event.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Age</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <InputText type="text" className="form-control" value={kidAge} id="kidage" onSubmit={(event) => setKidAge(event.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Interests</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <span classNameName="p-inputgroup-addon">
                                        <i classNameName="pi pi-map"></i>
                                    </span>
                                    <Dropdown value={interests} options={interests} onChange={(e) => setInterests(e.value)} placeholder="Select Interests" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <button id="add-child" type="button" className="btn btn-success px-4" value="Add Child">Add Child</button>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <button id="complete-family" type="button" className="btn btn-success px-4" value="Family Complete">Family Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Kids2;
