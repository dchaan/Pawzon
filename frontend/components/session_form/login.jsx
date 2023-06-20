import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/"));
  }

  update(field) {
    return e => this.setState ({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <div className="session-errors">
        <ul>{this.props.errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>))}</ul>
      </div>
    )
  }

  loginDemo(e) {
    e.preventDefault();

    const demoUser = {
      email: "demo@demo.com",
      password: "password"
    };

    this.props.login(demoUser);
  }

  render() {
    return (
      <div className="session-form">
        <div className="login-logo"><img className="login-img" src="/images/pawzon-white.png"/></div>
        <div className="login-form">
          <div className="login-title">Log In!</div>
          <form onSubmit={this.handleSubmit}>
            <label><b>Email</b>
              <input className="email-input" type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")}/>
            </label>
            <br/>
            <label><b>Password</b>
              <input className="password-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")}/>
            </label>
            {this.renderErrors()}
            <br/>
            <button className="sign-in-btn">Sign In</button>
            <br/>
            <button className="login-demo" onClick={e => this.loginDemo(e)}>Demo User</button>
          </form>
        </div>
        <div className="new-title">New to Pawzon?</div>
        <Link className="login-signup-btn" to="/signup">Create your Pawzon account!</Link>
      </div>
    )
  }
}

export default Login;