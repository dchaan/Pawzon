import React from "react";
import { Link } from "react-router-dom";
// import { login, logout, signup } from "../../actions/session_actions"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, login, logout, signup } = this.props;
    let profile = currentUser ? (
      <div>
        <h4>Hello, {currentUser.first_name}</h4>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
          <Link to="/login"><div className="login-link">Log In!</div></Link>
        <br/>
          <Link to="/signup"><div className="signup-link">Sign Up!</div></Link>
        <br/>
      </div>
    )
    
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

            {/* <div className="nav-search">
              <input className="nav-searchbar"/>
            </div> */}
          </div>
          <div className="nav-returns-orders">
            <div className="nav-returns">Returns</div>
            <div className="nav-orders">& Orders</div>
          </div>
          <div className="nav-flag">
            <img src="images/flag.png" className="nav-flag-img" />
          </div>
          <div>
            Hello
            {profile}
          </div>
          <div className="nav-cart">
            <Link className="nav-cart-link" to="/cart"><img src="images/cart.png" className="nav-cart-img" /></Link>
            <div className="nav-cart-word">Cart</div>
          </div>
        </div>

        <div className="nav-categories">
          <Link to="/products"><div className="nav-all">All</div></Link>
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