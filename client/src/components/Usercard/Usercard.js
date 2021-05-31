import React, {useContext} from "react";
import UserContext from "../../utils/userContext"

function Usercard (){

  const {dbUser}=useContext(UserContext);


    return(
<div className="card">
<div className="card-body">
  <div className="d-flex flex-column align-items-center text-center">
    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
    <div className="mt-3">
      <h4>{dbUser.fullname}</h4>
      <p className="text-secondary mb-1">3 Kids, We're swingers</p>
      <p className="text-muted font-size-sm">{dbUser.description}</p>
      <button className="btn btn-outline-primary">Message</button>
    </div>
  </div>
</div>
</div>
    )
}


export default Usercard;