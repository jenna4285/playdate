import React, { useContext } from "react";

function Minikidcard(props) {

  return (
    <div className="row">
    <div id="activity-container" className="activity-container  box p-d-flex p-mb-3 shadow">
        <div className="row">                     
          <div className="col-4">
            <h5>Zilker Park</h5>
        </div>
            <div className="col-4">
            <h5>March 31</h5>                                </div>
            <div className="col-4">
            <h5>Host: Fred Flintstone</h5>
            </div>
            <div className="row justify-content-center">
            <p style={{textAlign: "center"}}>Flying Kites! BYOK!</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default Minikidcard;