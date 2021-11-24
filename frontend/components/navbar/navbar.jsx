import React from "react";
import { Link } from "react-router-dom";
// import { login, logout, signup } from "../../actions/session_actions"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, login, logout, signup } = this.props;
    console.log(this.props.currentUser);
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
        <Link to="/" className="header-img"><img src="images/petzon.png"/></Link>
        {profile}
        {/* <div className="navbar-right">
          <h4>
            {currentUser ? `Hello, ${currentUser.first_name}` : "Welcome, Guest"}
            <br/>
            <Link to="/login">Login!</Link>
            <br/>
            <Link to="/signup">Sign Up!</Link>
            <br/>
            <button onClick={logout}>Logout</button>
            {currentUser ? <button onClick={logout}>Logout</button> : <Link to="/signup">Sign Up!</Link>}
          </h4>
        </div>
        <div className="navbar-left">
        </div> */}
      </div>
    )
  }
}

export default Navbar;