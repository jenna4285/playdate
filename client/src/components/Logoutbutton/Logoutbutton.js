import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './button.css'

const Logoutbutton = () => {
  const { logout } = useAuth0();

  return (
    <button className="hovergreen btn btn-light nav-link" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default Logoutbutton;