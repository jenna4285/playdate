import React from "react";
import "./Minikidcard.css"


function Minikidcard(props) {
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