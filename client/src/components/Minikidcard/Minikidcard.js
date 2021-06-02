import React, { useContext } from "react";
import "./Minikidcard.css"


function Minikidcard(props) {
// Example card with hardcoded name/age/interests
// will map over children in the db and render one of these 
// components for each child first - adding a child will add 
// a new child to the db which should pop in a new card when state 
// is changed. I can't figure out how to dig down to an individual
//child's info. 

  return (
    <div className="card m-2">
      <div className="card-body mini-kid-body">

        <div className="row">
          <div className="col-4">
            Name
          </div>
          <div className="col-4">
            <div>Age
          </div>
          </div>
          <div className="col-4">
            Gender
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            {props.name}
          </div>
          <div className="col-4">
            <div>{props.age}
          </div>
          </div>
          <div className="col-4">
            {props.gender}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Minikidcard;