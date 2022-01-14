import { connect } from "react-redux";
import { fetchCartItems, fetchCartItem, createCartItem, updateCartItem, deleteCartItem  } from "../../actions/cart_item_actions";
import CartItemIndex from "./cart_item_index";

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems),
  currentUser: state.entities.users[state.session.id],
  user: state.session.id
});

const mDTP = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCartItem: cartItem => dispatch(createCartItem(cartItem)),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem))
});

const CartItemIndexContainer = connect(mSTP, mDTP)(CartItemIndex);
export default CartItemIndexContainer;