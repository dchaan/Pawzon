import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { createCartItem, updateCartItem, fetchCartItems, deleteCartItem } from "../../actions/cart_item_actions";
import { deleteReview, fetchReviews } from "../../actions/review_actions";
import ProductShow from "./product_show";

const mSTP = ( state, ownProps ) => ({
  product: state.entities.products[ownProps.match.params.productId],
  productId: ownProps.match.params.productId,
  reviews: Object.values(state.entities.reviews),
  currentUser: state.entities.users[state.session.id],
  user: state.session.id,
  cartItems: Object.values(state.entities.cartItems)
});
// const mSTP = null;

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCartItem: cartItem => dispatch(createCartItem(cartItem)),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
  fetchReviews: productId => dispatch(fetchReviews(productId)),
  deleteReview: (reviewId, productId) => dispatch(deleteReview(reviewId, productId))
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default ProductShowContainer;