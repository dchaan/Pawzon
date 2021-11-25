import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions"
import ProductShow from "./product_show";

const mSTP = ( state, ownProps ) => ({
  product: state.entities.products[ownProps.match.params.productId]
});
// const mSTP = null;

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default ProductShowContainer;