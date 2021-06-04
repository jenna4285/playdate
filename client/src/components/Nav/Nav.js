import React from "react";
import Loginbutton from "../Loginbutton/Loginbutton.js";
import Logoutbutton from "../Logoutbutton/Logoutbutton.js";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>
          {isAuthenticated ? (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="nav-link px-2 text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/profile" className="nav-link px-2 text-white">
                  Profile
                </a>
              </li>
              <li>
                <a href="/editprofile" className="nav-link px-2 text-white">
                  Edit Profile
                </a>
              </li>
            </ul>
          ) : (
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <a href="/" className="nav-link px-2 text-secondary">
                Home
              </a>
            </ul>
          )}

          <div className="text-end">
            {isAuthenticated ? <Logoutbutton /> : <Loginbutton />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
