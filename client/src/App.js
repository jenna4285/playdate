import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Editprofile from './pages/Editprofile'
import Dashboard from './pages/Dashboard'
// import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App() {
  
  // CODE FOR SESSION/TOKEN - JG - Line 17-21 - Discuss w/ Team
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={Editprofile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/books/:id" component={Detail}/>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
