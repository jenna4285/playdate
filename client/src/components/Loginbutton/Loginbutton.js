import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import '../Logoutbutton/button.css'

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  return <button className="hovergreen btn btn-outline-light nav-link" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;