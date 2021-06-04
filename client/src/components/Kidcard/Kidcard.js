import React from "react";
import './Kidcard.css'

function Kidcard(props) {
  return (
<div className="col-sm-12 col-md-4 col-lg-4">
      <div className="card h-100 kid-card ">
        <div className="card-body">
          <h6 className="d-flex align-items-center mb-3 kid-name">{props.name}</h6>
          <small>Age</small>
          <div>{props.age}</div>
          <small>Gender</small>
          <div>{props.gender}</div>
        </div>
      </div>
</div>
  )
}

export default Kidcard;