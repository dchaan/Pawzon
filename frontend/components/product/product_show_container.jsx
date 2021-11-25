import { connect } from "react-redux";
import { fetchProduct } from "../../util/product_api_util";
import ProductShow from "./product_show";

const mSTP = ({ state, ownProps }) => ({
  product: state.entities.products[ownProps.match.params.productId]
});

const mDTP = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default ProductShowContainer;