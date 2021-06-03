import React, { useState, useEffect, useContext, useRef} from "react";
import API from "../../utils/API";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useAuth0 } from "@auth0/auth0-react";
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import interestChoices from './interestChoices'
import 'primeflex/primeflex.css';
import './Kids.css';
import gender from './gender';
import { Toast } from 'primereact/toast';


<<<<<<< HEAD
function Kids2() {
    const { isAuthenticated, user } = useAuth0();

    const [kidInfo, setKidInfo] = useState({
       
        kidname: "",
        kidage: '',
        gender: ""
       });

       const toast = useRef(null);

           
function handleBtnClick(event) {
    event.preventDefault();
 
    const showToast = () => {
        toast.current.show({severity:'success', summary: 'Success!', detail:'Child Added', life: 3000});
    }


    if (kidInfo.kidname && kidInfo.kidage && kidInfo.gender) {
        API.addKidByEmail({
            //GRABBING INFO FROM STATE
            email: user.email,
            push: {child: {
                kidname: kidInfo.kidname,
                kidage: kidInfo.kidage,
                gender: kidInfo.gender
                },
            }})
           
            .then(() => console.log("kids edited"))
            .then(() => showToast)
            // .then(() => window.location.href = "/editprofile")
            .catch(err => console.log(err));
    }
}


function handleInputChange(event) {
    const { name, value } = event.target
    setKidInfo({ ...kidInfo, [name]: value })
}

=======
function Kids2(props) {
>>>>>>> 344628ca57928a9831b078eace74e550c4014bb4
    return (
        <div className="container-fluid">
{/* ​           <Toast ref={toast} /> */}
            <div className="flex">
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
                                    <InputText name="kidname" type="text" className="form-control" value={props.kidInfo.kidname} id="kidname" onChange={props.handleChange} placeholder="Child's Name" />
                                </div>
                            </div>
                            <div className="row mb-3">
​
                                <div className="col text-secondary">
                                    <InputText name="kidage" type="text" className="form-control" value={props.kidInfo.kidage} id="kidage" onChange={props.handleChange} placeholder="Child's Age" />
                                </div>
                                <div className="row mb-3">
                                        
                                        <div className="col-sm-9 text-secondary">
                                            <Dropdown name="gender" value={props.kidInfo.gender} options={gender} onChange={props.handleChange} placeholder="Select a Gender" />
                                        </div>
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
                                    value="Add Child" disabled={!(props.kidInfo.kidname&&props.kidInfo.kidage)}
                                    onClick={props.handleBtnClick}
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