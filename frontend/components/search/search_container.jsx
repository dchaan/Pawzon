import { connect } from "react-redux";
import Search from "./search";
import { fetchProducts } from "../../actions/product_actions";

const mSTP = state => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchProducts: data => dispatch(fetchProducts(data))
});

export default connect(mSTP, mDTP)(Search);