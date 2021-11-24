import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";

const App = () => (
  <div>
    <Link to="/" className="header"><h1>Petzon</h1></Link>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={NavbarContainer} />
    </Switch>
  </div>
);

export default App;