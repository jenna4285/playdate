import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-i4eimx8o.us.auth0.com"
    clientId="RhW9z7OCDuCXQMJC39u1nf9R2UJyCyE5"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


