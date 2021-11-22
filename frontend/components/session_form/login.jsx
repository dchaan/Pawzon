import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState ({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <div className = 'session-errors'>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    )
  };

  loginDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demoemail@gmail.com',
      password: 'password'
    };
    this.setState(demoUser);
    this.props.login(demoUser);
  }

  render() {
    <div className = 'login'>
      <h1>Log In!</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input type='text' value={this.state.email} onChange={this.update('email')}/>
        </label>
        <label>Password
          <input type='password' value={this.state.password} onChange={this.update('password')}/>
        </label>
        {this.renderErrors()}
        <button className='login-btn' onClick={this.handleSubmit}Log In></button>
      </form>
      <button className='login-demo' onClick={this.loginDemo}>Demo User</button>
      <Link clasName='login-signup-btn' to='/signup'>Create your AtoZ account</Link>
    </div>
  }
}

export default Login