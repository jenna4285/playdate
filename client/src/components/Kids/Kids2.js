import React, { useState, useEffect } from "react";
// import { InputText } from 'primereact/inputtext';
import './Kids.css'
import { Dropdown } from 'primereact/dropdown';
import interests from './interests'


function Kids2() {
    const [kidName, setKidName] = useState();
    const [kidAge, setKidAge] = useState();
    const [interests, setInterests] = useState();

    return (


        <form classNameName="container-fluid">
            <br />
            <container classNameName="title">
                <h1>Edit Kids</h1><br />
            </container>
            <div classNameName="p-d-flex p-jc-center">

                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={kidName} id="kidname" onSubmit={(event) => setKidName(event.target.value)}/>
                                </div>
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Child's Age</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" value={kidAge} id="kidage" onSubmit={(event) => setKidAge(event.target.value)}/>
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
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                            <input type="button" className="btn btn-primary px-4" value="Add Child" />
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" className="btn btn-primary px-4" value="Family Complete" />
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
