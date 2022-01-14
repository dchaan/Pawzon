import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
  review: {
    title: "",
    body: "",
    rating: 3,
    user_id: state.session.id,
    product_id: ownProps.match.params.productId
  }
});

const mDTP = dispatch => ({
  createReview: (review) => dispatch(createReview(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm));
