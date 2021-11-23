import React from "react"
import { Link } from "react-router-dom"

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <div className='session-errors'>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    <div className='signup'>
      <h1>Sign Up!</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input type='text' value={this.state.email} onChange={this.update('email')} />
        </label>
        <label>Password
          <input type='password' value={this.state.password} onChange={this.update('password')} />
        </label>
        {this.renderErrors()}
        <button className='signup-btn' onClick={this.handleSubmit}>Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <Link className='signup-login-btn' to='/login'>Log in</Link>
    </div>
  }
  
}

export default Signup