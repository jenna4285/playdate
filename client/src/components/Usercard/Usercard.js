import React, {useContext} from "react";
import UserContext from "../../utils/userContext"

function Usercard (props){



    return(
<div className="card">
<div className="card-body">
  <div className="d-flex flex-column align-items-center text-center">
    <img src={props.user.picture} alt="Admin" className="rounded-circle" width="150"/>
    <div className="mt-3">
      <h4>{props.user.fullname}</h4>
      <p className="text-secondary mb-1">{props.user.username}</p>
      <p className="text-muted font-size-sm">{props.user.description}</p>
      <button className="btn btn-outline-primary">Message</button>
    </div>
  </div>
</div>
</div>
    )
}


export default Usercard;