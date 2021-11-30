import { connect } from "react-redux";
import { fetchReviews, destroyReview } from "../../actions/review_action"
import { withRouter } from "react-router-dom";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  fetchReviews: productId => dispatch(fetchReviews(productId)),
  deleteReview: review => dispatch(deleteReview(review))
});

const ReviewIndexContainer = withRouter(connect(mSTP, mDTP)(ReviewIndex));
export default ReviewIndexContainer;
