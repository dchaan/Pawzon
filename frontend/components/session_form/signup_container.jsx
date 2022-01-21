import { connect } from "react-redux";
import { clearErrors, signup } from "../../actions/session_actions";
import Signup from "./signup";

const mSTP = ({ errors }) => ({
  errors: errors.session
})

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(Signup);
