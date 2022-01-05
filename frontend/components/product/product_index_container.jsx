import { connect } from "react-redux";
import { fetchCartItems } from "../../actions/cart_item_actions";
import { fetchProducts } from "../../actions/product_actions";
import ProductIndex from "./product_index";

const mSTP = state => ({
  products: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCartItems: () => dispatch(fetchCartItems())
})

const ProductIndexContainer = connect(mSTP, mDTP)(ProductIndex);
export default ProductIndexContainer;