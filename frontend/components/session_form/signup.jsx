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
        <h3>Sign Up!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name
            <input type="text" value={this.state.first_name} onChange={this.update("first_name")} />
          </label>
          <label>Last Name
            <input type="text" value={this.state.last_name} onChange={this.update("last_name")} />
          </label>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <br/>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <br/>
          {this.renderErrors()}
          <button className="signup-btn">Sign Up</button>
        </form>
        
        <p>Already have an account?</p>
        <Link className="signup-login-btn" to="/login">Log in!</Link>
      </div>
    )
  };
}

export default Signup