import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
// import Profile from "../Profileform/Profileform";
import API from "../../utils/API"
import './Signupform.css'

function SignupForm() {
const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: ""
})

function handleInputChange(event){
    const {name, value} = event.target
    setSignUpInfo({...signUpInfo, [name]: value})
    console.log(signUpInfo)
}

function handleBtnClick(event){
    event.preventDefault();
    console.log(signUpInfo.username)
    if(signUpInfo.username && signUpInfo.password){
        API.saveUser({
          username: signUpInfo.username,
          password: signUpInfo.password
        })
          .then(() => setSignUpInfo({
            username: "",
            password: "",
          }))
          .then(() => console.log("user saved"))
          .then(()=> window.location.href="/editprofile")
          .catch(err => console.log(err));
      }
}

    return (
        <form className="container-fluid">

        <div className = "p-d-flex p-jc-center">

                <div className="p-grid p-fluid card">

       
        <h1>Create an Account!</h1>
      
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="username">Username</label>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                    <InputText id="username" type="text" name="username" value={signUpInfo.username} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="password">Password</label>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-unlock"></i>
                        </span>
                    <InputText id="password" type="password" name="password" value={signUpInfo.password} onChange={handleInputChange}/>
                </div>
                </div>
                <div className="p-field p-col-12 p-md-12">
                <button id="create-profile" type="button" class="btn btn-primary btn-lg px-4 gap-3"
                disabled={!(signUpInfo.username && signUpInfo.password)}
                onClick={handleBtnClick}>Create Profile</button> 
            </div>
            </div>
            </div>
        </form>
       

    )
}


export default SignupForm;