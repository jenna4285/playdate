import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
import Profile from "../Profileform/Profileform";

function SignupForm() {
const [signUpInfo, setSignUpInfo] = useState({
    firstname: "",
    lastname: ""
})

function handleInputChange(event){
    const {name, value} = event.target
    setSignUpInfo(...signUpInfo, [name], value)
    console.log(signUpInfo)
}

    return (
        <form className="container-fluid">
            <h1>Create an Account!</h1>
                <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="username">Username</label>
                    <InputText id="usertname" type="text" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" type="password" />
                </div>
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            </div>
        </form>
       

    )
}


export default SignupForm;