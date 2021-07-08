import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Editprofile from './pages/Editprofile'
import Friendprofile from './pages/Friendprofile'
import Dashboard from './pages/Dashboard'
import Loading from './pages/Loading'
import Activitypage from './pages/ActivityPage'
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";

import UserContext from "./utils/userContext";
import API from "./utils/API"
import { useAuth0 } from "@auth0/auth0-react";


function App() {
const [dbUser, setDbUser]=useState({
  email : "none"
});
const { isAuthenticated, user, isLoading } = useAuth0();


useEffect(() => {
  if(!user) return;
  const pullFromDb = async () => {await API.getUserByEmail(user.email).then(userInfo => {
    if(!userInfo.data) {
      API.saveUser(user);
      window.location.replace('/editprofile')
    }
    setDbUser(userInfo.data);
  });
}
pullFromDb();
}, [isAuthenticated]);

if (isLoading || !dbUser.email){
  return(
    <Loading/>
  )
}
  
 
  return (
    <Router>
      <div id="master">
      <UserContext.Provider value={{dbUser}}>
        <Nav />
        {isAuthenticated && dbUser.email? 
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={Editprofile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/activity/:id" component={Activitypage}/>
          <Route exact path="/profile/:id" component={Friendprofile}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        : isAuthenticated && dbUser.email && !dbUser.signedUp ?
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/editprofile" component={Editprofile}/>
        </Switch>
        :
        <Home />}
            </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
