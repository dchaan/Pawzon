import { connect } from "react-redux";
import Homepage from "./homepage"
import { fetchCartItems } from "../../actions/cart_item_actions";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  user: state.session.id,

});

const mDTP = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(mSTP, mDTP)(Homepage)