import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProductShowContainer from "./product/product_show_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";
import Homepage from "./homepage";

const App = () => (
  <div>
    {/* <Link to="/products/:productId" component={ProductShowContainer}>Dog Beds</Link> */}
    
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={Homepage} />
      <Route path="/products/:productId" component={ProductShowContainer} />
    </Switch>
  </div>
);

export default App;