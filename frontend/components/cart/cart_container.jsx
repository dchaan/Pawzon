import { connect } from "react-redux";
import { fetchCarts, fetchCart, createCart, deleteCart  } from "../../actions/cart_actions";
import Cart from "./cart";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  items: Object.values(state.entities.carts)
})

const mDTP = dispatch => ({
  fetchCarts: () => dispatch(fetchCarts()),
  fetchCart: cart => dispatch(fetchCart(cart)),
  createCart: cart => dispatch(createCart(cart)),
  deleteCart: cartId => dispatch(deleteCart(CartId))
})

const CartContainer = connect(mSTP, mDTP)(Cart);
export default CartContainer;