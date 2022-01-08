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
    const { currentUser, logout, cartItems } = this.props;
    let profile = currentUser ? (
      <div>
        <div className="nav-hello">Hello, <b>{currentUser.first_name}</b></div>
        <div className="nav-logout"><button className="nav-logout-btn" onClick={logout}>Logout</button></div>
      </div>
    ) : (
      <div>
        <div className="nav-hello">Hello</div>
        <div className="nav-greeting-links">
          <div className="nav-greeting"><Link className="greeting-link" to="/login"> Login </Link></div>
          {" or "}
          <div className="nav-greeting"><Link className="greeting-link" to="/signup">Sign Up</Link></div>
        </div>
      </div>
    )

    let cartQuantity = 0;
    cartItems.forEach(cartItem => cartQuantity += cartItem.quantity );

    return (
      <div className="nav-container">
        <div className="navbar-top">
          <Link className="nav-logo-container" to="/">
            <img src="images/pawzon.png" className="nav-logo" />
          </Link>
          <div className="nav-location-container">
            <img src="images/location.png" className="nav-location-img"/>
            <div className="nav-deliver-to">
              <div className="nav-deliver-to-user">Deliver to {this.props.currentUser ? this.props.currentUser.first_name : ""}</div>
              <div className="nav-deliver-to-city">Pacifica 94044</div>
            </div>
          </div>
          <div className="nav-search-container">
            <form className="searchbar-form">
              <input type="text" className="searchbar-input" value=" "/>
            </form>
          </div>

          <div className="nav-flag-container">
            <img src="images/flag.png" className="nav-flag-img" />
          </div>
          <div className="nav-greeting-container">
            {profile}
          </div>
          <div className="nav-returns-orders-container">
            <div className="nav-returns">Returns</div>
            <div className="nav-orders">& Orders</div>
          </div>
          <div className="nav-cart-container">
            {
              currentUser ? <Link className="nav-cart-link" to="/cart"><img src="images/cart.png" className="nav-cart-img" /></Link> :
                <Link className="nav-cart-link" to="/login"><img src="images/cart.png" className="nav-cart-img" /></Link>
            }
            { 
              cartQuantity ? <div className="nav-cart-counter">{cartQuantity}</div> : null 
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