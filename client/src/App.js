import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Editprofile from './pages/Editprofile'
import Dashboard from './pages/Dashboard'
// import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";

import UserContext from "./utils/userContext";
import API from "./utils/API"
import { useAuth0 } from "@auth0/auth0-react";


function App() {
const [dbUser, setDbUser]=useState({

});
const { isAuthenticated, user } = useAuth0();


useEffect(() => {
  if(!user) return;
  const pullFromDb = async () => {await API.getUserByEmail(user.email).then(userInfo => {
    if(!userInfo.data) {
      API.saveUser(user);
      window.location.replace('/editprofile')
    }
    console.log(userInfo)
    setDbUser(userInfo.data);
  });
}
pullFromDb();
}, [isAuthenticated]);


  
  // CODE FOR SESSION/TOKEN - JG - Line 17-21 - Discuss w/ Team
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return (
    <UserContext.Provider value={{dbUser}}>
    <Router>
      <div>
        <Nav />
<<<<<<< HEAD
        {isAuthenticated?
=======
        {isAuthenticated ? 
>>>>>>> 344628ca57928a9831b078eace74e550c4014bb4
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={Editprofile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
<<<<<<< HEAD
        : <Route exact path={["/", "/home"]} component={Home}/>}
=======
        :
        <Route path={["/", "/home"]} component={Home}/>}
>>>>>>> 344628ca57928a9831b078eace74e550c4014bb4
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
