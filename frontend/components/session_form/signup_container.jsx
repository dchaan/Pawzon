import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import Signup from "./signup";

const mSTP = ({ errors }) => ({
  errors: errors.session
})

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
})

const SignupContainer = connect(mSTP, mDTP)(Signup);
export default SignupContainer;