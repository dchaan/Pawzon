import React from "react";
import { Link } from "react-router-dom";
// import { login, logout, signup } from "../../actions/session_actions"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) { this.props.fetchCartItems(); }
  };

  render() {
    const { currentUser, logout, items } = this.props;
    let profile = currentUser ? (
      <div>
        <div className="nav-name">Hello, {currentUser.first_name}</div>
        <button className="nav-logout-btn" onClick={logout}>Logout</button>
      </div>
    ) : (
      <div className="nav-login">Hello 
          <Link className="login-link" to="/login"> Log In</Link>
        <div className="nav-or"> or </div>
          <Link className="signup-link" to="/signup">Sign Up</Link>
      </div>
    )

    let cartItems = 0;
    items.forEach(item => cartItems += item.quantity );

    return (
      <div className="nav">
        <div className="navbar">
          <div className="nav-header-logo"><Link to="/"><img src="images/pawzon.png" className="nav-logo" /></Link></div>
          <div className="nav-location">
            <img src="images/location.png" className="nav-location-img"/>
            <div className="nav-deliver-to">
              <div className="nav-deliver-to-user">Deliver to {this.props.currentUser ? this.props.currentUser.first_name : ""}</div>
              <div className="nav-deliver-to-city">Pacifica 94044</div>
            </div>

            <div className="nav-search">
              <input className="nav-searchbar"/>
            </div>
          </div>
          
          <div className="nav-flag">
            <img src="images/flag.png" className="nav-flag-img" />
          </div>
          <div className="nav-hello-name">
            {profile}
          </div>
          <div className="nav-returns-orders">
            <div className="nav-returns">Returns</div>
            <div className="nav-orders">& Orders</div>
          </div>
          <div className="nav-cart">
            {
            currentUser ? <Link className="nav-cart-link" to="/cart"><img src="images/cart.png" className="nav-cart-img" /></Link> :
              <Link className="nav-cart-link" to="/login"><img src="images/cart.png" className="nav-cart-img" /></Link>
            }
            {
              cartItems ? <div className="nav-cart-counter">{cartItems}</div> : null
            }
            <div className="nav-cart-word">Cart</div>
          </div>
        </div>

        <div className="nav-categories">
          <Link className="nav-all" to="/products">All</Link>
          <div className="nav-beds">Beds</div>
          <div className="nav-food">Food</div>
          <div className="nav-toys">Toys</div>
          <div className="nav-treats">Treats</div>
          <div className="nav-walking">Walking</div>
        </div>
      </div>
    )
  }
}

export default Navbar;