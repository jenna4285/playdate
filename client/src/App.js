import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Editprofile from './pages/Editprofile'
import Friendprofile from './pages/Friendprofile'
import Dashboard from './pages/Dashboard'
import Loading from './pages/Loading'
// import Books from "./pages/Books";
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
  
  // CODE FOR SESSION/TOKEN - JG - Line 17-21 - Discuss w/ Team
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return (
    <UserContext.Provider value={{dbUser}}>
    <Router>
      <div id="master">
        <Nav />
        {isAuthenticated ? 
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={Editprofile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/:id" component={Friendprofile}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        :
        <Route path={["/", "/home"]} component={Home}/>}
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
