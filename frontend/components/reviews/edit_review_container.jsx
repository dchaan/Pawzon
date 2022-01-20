import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchReview, updateReview } from "../../actions/review_actions";
import EditReview from "./edit_review"

const mSTP = (state, ownProps) => dispatch => ({
  productId: parseInt(ownProps.match.params.productId),
  reviewId: parseInt(ownProps.match.params.reviewId)
});

const mDTP = dispatch => ({
  fetchReview: (reviewId, productId) => dispatch(fetchReview(reviewId, productId)),
  updateReview: (review, productId) => dispatch(updateReview(review, productId))
});

export default connect(mSTP, mDTP)(EditReview);