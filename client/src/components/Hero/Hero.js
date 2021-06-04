import React from "react";
import './Hero.css'
import { useAuth0, isAuthenticated, user } from "@auth0/auth0-react"


function Hero(props){

  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src="./playground.png" alt="" width="100" height="auto"/>
          <h1 className="display-5 fw-bold heroheader">PlayDate</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Sign-up to connect with other families near you!</p>
            {isAuthenticated? <p>We hope you're enjoying your playdates!</p> : 
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => loginWithRedirect()}>Sign-up</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => loginWithRedirect()}>Login</button>
                </div>}
          </div>
        </div>
    </div>
  )
}

export default Hero;
