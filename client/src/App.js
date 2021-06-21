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
const [dbUser, setDbUser]=useState({});
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

if (isLoading){
  return(
    <Loading/>
  )
}
  
 
  return (
    <Router>
      <div id="master">
        <Nav />
        {isAuthenticated && dbUser.email? 
            <UserContext.Provider value={{dbUser}}>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={Editprofile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/activity" component={Activitypage}/>
          <Route exact path="/profile/:id" component={Friendprofile}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </UserContext.Provider>
        :
        <Route path={["/", "/home"]} component={Home}/>}
      </div>
    </Router>
  );
}

export default App;
