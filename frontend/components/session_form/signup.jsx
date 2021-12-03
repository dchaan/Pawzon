import React from "react"
import { Link } from "react-router-dom"

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/'));
  };

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  };

  renderErrors() {
    return (
      <div className="session-errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    )
  };

  render() {
    return (
      <div className="signup">
        <div className="signup-logo"><img className="signup-img" src="/images/pawzon-login.png" /></div>
        <div className="signup-form">
          <div className="signup-title">Create Account!</div>
          <form onSubmit={this.handleSubmit}>
            <label><b>First Name</b>
              <input className="first-name-input" type="text" value={this.state.first_name} onChange={this.update("first_name")} />
            </label>
            <br/>
            <label><b>Last Name</b>
              <input className="last-name-input" type="text" value={this.state.last_name} onChange={this.update("last_name")} />
            </label>
            <br/>
            <label><b>Email</b>
              <input className="signup-email-input" type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
            <br/>
            <label><b>Password</b>
              <input className="password-email-input" type="password" placeholder="At least 6 characters" value={this.state.password} onChange={this.update("password")} />
            </label>
            <br/>
            {this.renderErrors()}
            <button className="signup-btn">Create your Pawzon Account</button>
          </form>
        </div>
        
        <div className="signup-bottom">
          <div className="already-have-account">Already have an account?</div>
          <Link className="signup-login-btn" to="/login">Log in!</Link>
        </div>
      </div>
    )
  };
}

export default Signup