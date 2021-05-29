import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
// import Profile from "../Profileform/Profileform";
import API from "../../utils/API"

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
          .catch(err => console.log(err));
      }
}

    return (
        <form className="container-fluid">
            <h1>Create an Account!</h1>
                <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" type="text" name="username" value={signUpInfo.username} onChange={handleInputChange}/>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" type="password" name="password" value={signUpInfo.password} onChange={handleInputChange}/>
                </div>
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3"
                disabled={!(signUpInfo.username && signUpInfo.password)}
                onClick={handleBtnClick}>Primary button</button>
            </div>
        </form>
       

    )
}


export default SignupForm;