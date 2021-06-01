import React, { useState, useEffect, useContext} from "react";
import API from "../../utils/API";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useAuth0 } from "@auth0/auth0-react";
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import interestChoices from './interestChoices'
import 'primeflex/primeflex.css';
import './Kids.css';

function Kids2() {
    const { isAuthenticated, user } = useAuth0();

    const [kidInfo, setKidInfo] = useState({
        // Grabbing user.email from auth0
        // email:"",
        kidname: "",
        kidage: '',
        gender: "boy"
       });

// itemTemplate((options)=>{
//     });

function handleBtnClick(event) {
    event.preventDefault();
    // console.log(kidInfo.kidage);
    // console.log(kidInfo.kidname);
    // console.log(user.email)
    if (kidInfo.kidname && kidInfo.kidage) {
        API.addKidByEmail({
            //GRABBING INFO FROM STATE
            email: user.email,
            push: {child: {
                kidname: kidInfo.kidname,
                kidage: kidInfo.kidage,
                gender: kidInfo.gender
                },
            }})
            // .then(() => setProfileInfo({
            //     username: "",
            //     password: "",
            // }))
            .then(() => console.log("kids edited"))
            .then(() => window.location.href = "/editprofile")
            .catch(err => console.log(err));
    }
}

// useEffect(() => {

// })

function handleInputChange(event) {
    const { name, value } = event.target
    setKidInfo({ ...kidInfo, [name]: value })
}

    return (
        <div className="container-fluid">
​
            <div className="flex">
​
​
​
                <div id = "kid-form-card" className="card">
​
                    <h1>Add Kids</h1>
​
                    <div className="p-field p-col-12 p-md-12">
                        <div className="card-body">
                            <div className="row mb-3">
​
                                <div className="col text-secondary">
                                    <InputText name="kidname" type="text" className="form-control" value={kidInfo.kidname} id="kidname" onChange={handleInputChange} placeholder="Child's Name" />
                                </div>
                            </div>
                            <div className="row mb-3">
​
                                <div className="col text-secondary">
                                    <InputText name="kidage" type="text" className="form-control" value={kidInfo.kidage} id="kidage" onChange={handleInputChange} placeholder="Child's Age" />
                                </div>
                            </div>
                            {/* <div className="row mb-3">
​
                                <div className="col text-secondary">
                                <MultiSelect value={interests} display="chip" options={interestChoices} onChange={(e) => setInterests(e.value)} placeholder="Child's Interests" />
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col">
                                    <button id="add-child" type="button" className="btn btn-success px-4" 
                                    value="Add Child" disabled={!(kidInfo.kidname&&kidInfo.kidage)}
                                    onClick={handleBtnClick}
                                    >Add Child</button>
                                </div>
​
                                <div className="col text-secondary">
                                    <button id="complete-family" type="button" className="btn btn-success px-4" value="Family Complete">Family Complete</button>
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