import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProductShowContainer from "./product/product_show_container";
import NavbarContainer from "./navbar/navbar_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";
import Homepage from "./homepage";
import ProductIndexContainer from "./product/product_index_container";
import Footer from "./footer/footer";
import ReviewFormContainer from "./reviews/review_form_container";

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <Route path="/" component={Homepage} />
    </Switch>
    <Footer />
  </div>
);

export default App;