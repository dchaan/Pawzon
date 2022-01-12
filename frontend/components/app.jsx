import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProductShowContainer from "./product/product_show_container";
import NavbarContainer from "./navbar/navbar_container";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";
import HomepageContainer from "./homepage/homepage_container"
import Homepage from "./homepage/homepage";
import ProductIndexContainer from "./product/product_index_container";
import Footer from "./footer/footer";
import ReviewFormContainer from "./reviews/review_form_container";
import CartItemIndexContainer from "./cart_items/cart_item_index_container";
import Checkout from "./cart_items/checkout"

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <Route exact path="/products/:productId/reviews/new" component={ReviewFormContainer} />
      <Route exact path="/cart" component={CartItemIndexContainer}/>
      <ProtectedRoute exact path="/checkout" component={Checkout}/>
      <Route path="/" component={HomepageContainer}/>
    </Switch>
    <Footer />
  </div>
);

export default App;