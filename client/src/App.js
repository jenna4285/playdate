import React from "react";
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

function App() {
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
