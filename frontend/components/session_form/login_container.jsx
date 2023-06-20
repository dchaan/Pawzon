import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import Login from "./login";

const mSTP = ({ errors }) => ({
  errors: errors.session
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Login);