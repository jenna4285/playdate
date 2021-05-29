import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';

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

    return(
    
<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="firstname6">Firstname</label>
        <InputText id="firstname6" name="firstname" value={signUpInfo.firstname} onChange={handleInputChange}  type="text" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" name="lastname" value={signUpInfo.lastname} onChange={handleInputChange} />
    </div>
     <div className="p-field p-col-12 p-md-6">
        <label htmlFor="lastname6">Email</label>
        <InputText id="email" type="email" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="password6">Password</label>
        <InputText id="password" type="password" />
</div>

</div>
 
    )
}


export default SignupForm;