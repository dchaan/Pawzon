import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";

const App = () => (
  <div>
    Petzon
    <Switch>
      debugger
      <AuthRoute exact path="/login" component={LoginContainer}/> 
      <AuthRoute exact path="/signup" component={SignupContainer}/>
    </Switch>
  </div>
)

export default App

