import React from "react";
import './Kidcard.css'

function Kidcard() {
  return (

      <div className="card h-100 kid-card ">
        <div className="card-body">
          <h6 className="d-flex align-items-center mb-3">NAME HERE</h6>
          <small>Age</small>
          <div>AGE HERE</div>
          <small>Gender</small>
          <div>GENDER HERE</div>
          <small>Interests</small>
          <div>INTERESTS HERE</div>
        </div>
      </div>

  )
}

export default Kidcard;