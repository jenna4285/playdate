import React, { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import './Kids.css'
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import interestChoices from './interestChoices'


function Kids2() {
    const [kidName, setKidName] = useState();
    const [kidAge, setKidAge] = useState();
    const [interests, setInterests] = useState();

// itemTemplate((options)=>{

//     });

    return (
        <form className="container-fluid">

                <div id = "kid-form-card" className="card">

                    <h1>Add Kids</h1>

                    <div className="p-field p-col-12 p-md-12">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Name</h6>
                                </div>
                                <div className="col-sm-6 text-secondary">
                                    <InputText name="kidname" type="text" className="form-control" value={kidName} id="kidname" onChange={(event) => setKidName(event.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Age</h6>
                                </div>
                                <div className="col-sm-6 text-secondary">
                                    <InputText type="text" className="form-control" value={kidAge} id="kidage" onChange={(event) => setKidAge(event.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Interests</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                <MultiSelect value={interests} options={interestChoices} onChange={(e) => setInterests(e.value)} />
                                </div>
                            </div>
                            <div className="row">
                                    {interests}
                                </div>
                            <div className="row">
                                <div className="col">
                                    <button id="add-child" type="button" className="btn btn-success px-4" 
                                    value="Add Child" disabled={!(kidName&&kidAge&&interests)}>Add Child</button>
                                </div>

                                <div className="col text-secondary">
                                    <button id="complete-family" type="button" className="btn btn-success px-4" value="Family Complete">Family Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </form>

    )
}

export default Kids2;
