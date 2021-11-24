import React from "react";
import { Link } from "react-router-dom";
import { login, logout, signup } from "../../actions/session_actions"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, login, logout, signup } = this.props;

    return (
      <div className="navbar">
        <div className="navbar-right">
          <h4>
            {currentUser ? "Hello, " : "Welcome, "}
            {currentUser ? currentUser.email : "Guest"}
            <br/>
            <Link to="/login">Login!</Link>
            <br/>
            <Link to="/signup">Sign Up!</Link>
            <br/>
            <button onClick={logout}>Logout</button>
            {/* {currentUser ? <button onClick={logout}>Logout</button> : <Link to="/signup">Sign Up!</Link>} */}
          </h4>
        </div>
        <div className="navbar-left">
        </div>
      </div>
    )
  }
}

export default Navbar;