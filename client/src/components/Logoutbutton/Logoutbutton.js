import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logoutbutton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-light me-2" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default Logoutbutton;