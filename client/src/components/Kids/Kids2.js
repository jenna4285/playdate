import React from "react";
import { Link } from "react-router-dom"
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import 'primeflex/primeflex.css';
import './Kids.css';
import gender from './gender';


function Kids2(props) {
    return (
        <div className="container-fluid">

            <div className="flex">

                <div id="kid-form-card" className="card">

                    <h1>Add Kids</h1>

                    <div className="p-field p-col-12 p-md-12">
                        <div className="card-body">
                            <div className="row mb-3">

                                <div className="col text-secondary">
                                    <InputText name="kidname" type="text" className="form-control" value={props.kidInfo.kidname} id="kidname" onChange={props.handleChange} placeholder="Child's Name" />
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col text-secondary">
                                    <InputText name="kidage" type="text" className="form-control" value={props.kidInfo.kidage} id="kidage" onChange={props.handleChange} placeholder="Child's Age" />
                                </div>
                                <div className="row mb-3">

                                    <div className="padt-14 col-sm-9 text-secondary">
                                        <Dropdown name="gender" value={props.kidInfo.gender} options={gender} onChange={props.handleChange} placeholder="Select a Gender" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button id="add-child" type="button" className="btn btn-success px-4"
                                        value="Add Child" disabled={!(props.kidInfo.kidname && props.kidInfo.kidage)}
                                        onClick={props.handleBtnClick}
                                    >Add Child</button>
                                </div>

                                <div className="col text-secondary">
                                    <Link to="/dashboard"><button id="complete-family" type="button" className="btn btn-success px-4" value="Family Complete" >Family Complete</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Kids2;