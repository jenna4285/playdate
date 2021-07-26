import React, {useContext} from "react";
import Loginbutton from "../Loginbutton/Loginbutton.js";
import Logoutbutton from "../Logoutbutton/Logoutbutton.js";
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'
import UserContext from '../../utils/userContext';


function Nav() {
  const {dbUser} = useContext(UserContext);
  const { isAuthenticated } = useAuth0();
  return (
  <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <div className ="container-fluid">
    <a className="navbar-brand" href="#">Playdate</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {isAuthenticated && dbUser.signedUp ?
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">Home </a>
          <a className="nav-link" href="/dashboard">Dashboard</a>
          <a className="nav-link" href="/profile">Profile</a>
          <a className="nav-link" href="/editprofile">Edit Profile</a>
          <Logoutbutton className = "text-end"/>
      </div>
      </div>
    : isAuthenticated && !dbUser.signedUp ?
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
          <a className="nav-link active" href="/">Home</a>
          <a className="nav-link" href="/editprofile">Edit Profile</a>
          <Logoutbutton className = "text-end"/>
        </div>
        </div>
    : 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
          <a className="nav-link active" href="/">Home</a>
          <Loginbutton className = "nav-link text-end"/>
      </div>
      </div>
  }
            {/* <div className="text-end">
            {isAuthenticated ? <Logoutbutton /> : <Loginbutton />}
          </div> */}
    </div>
  </nav>
  );
}

export default Nav;
