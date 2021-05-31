import React, {useEffect} from "react";
import { useAuth0,isAuthenticated, user } from "@auth0/auth0-react"

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-outline-light me-2" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;