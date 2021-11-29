import { connect } from "react-redux";
import { createReview } from "../../actions/review_action";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
  review: {
    title: "",
    body: "",
    rating: 1,
    reviewer_id: state.entities.users.id,
    product_id: ownProps.match.params.productId
  }
})

const mDTP = dispatch => ({
  createReview: (review, productId) => dispatch(createReview(review, productId))
})

const ReviewFormContainer = withRouter(connect(mSTP, mDTP)(ReviewForm));
export default ReviewFormContainer;