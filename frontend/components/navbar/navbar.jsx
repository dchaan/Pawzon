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
        <button><Link to="/login">Log In!</Link></button>
        <br/>
        <button><Link to="/signup">Sign Up!</Link></button>
        <br/>
      </div>
    )
    
    return (
      <div className="navbar">

        <div className="nav-header-logo"><Link to="/"><img src="images/pawzon.png" className="nav-logo" /></Link></div>

        <div className="nav-location">
          <img src="images/location.png" className="nav-location-img"/>
          <div className="nav-deliver-to">
            <div className="nav-deliver-to-user">Deliver to {this.props.currentUser ? this.props.currentUser.first_name : ""}</div>
            <div className="nav-deliver-to-city">Pacifica 94044</div>
          </div>
        </div>

        <div className="nav-returns-orders">
          <div clasName="nav-returns">Returns</div>
          <div className="nav-orders">& Orders</div>
        </div>

        <div className="nav-flag">
          <img src="images/flag.png" className="nav-flag-img" />
        </div>

        {profile}

        <div className="nav-cart">
          <img src="images/cart.png" className="nav-cart-img" />
          <div className="nav-cart-word">Cart</div>
        </div>
      </div>
    )
  }
}

export default Navbar;