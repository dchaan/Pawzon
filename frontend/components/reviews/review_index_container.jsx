import { connect } from "react-redux";
import { fetchReviews, createReview, deleteReview } from "../../actions/review_actions"
import { withRouter } from "react-router-dom";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  fetchReviews: productId => dispatch(fetchReviews(productId)),
  createReview: (productId, review) => dispatch(createReview(productId, review)),
  deleteReview: (reviewId, productId) => dispatch(deleteReview(reviewId, productId))
});

const ReviewIndexContainer = withRouter(connect(mSTP, mDTP)(ReviewIndex));
export default ReviewIndexContainer;
