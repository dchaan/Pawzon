import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { createCartItem } from "../../actions/cart_item_actions";
import { fetchReviews } from "../../actions/review_action";
import ProductShow from "./product_show";

const mSTP = ( state, ownProps ) => ({
  product: state.entities.products[ownProps.match.params.productId],
  reviews: Object.values(state.entities.reviews),
  currentUser: state.entities.users[state.session.id],
  user: state.session.id,
  cartItems: Object.values(state.entities.cartItems)
});
// const mSTP = null;

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  createCartItem: cartItem => dispatch(createCartItem(cartItem)),
  fetchReviews: productId => dispatch(fetchReviews(productId))
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default ProductShowContainer;