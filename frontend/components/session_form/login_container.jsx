import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./login";

const mSTP = ({ errors }) => ({
  errors: errors.session
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
})

const LoginContainer = connect(mSTP, mDTP)(Login);
export default LoginContainer;