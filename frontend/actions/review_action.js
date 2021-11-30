import * as APIUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReviews = (productId) => dispatch => (
  APIUtil.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId, productId) => dispatch => (
  APIUtil.fetchReview(reviewId, productId)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (review) => dispatch => (
  APIUtil.deleteReview(review)
    .then(review => dispatch(removeReview(review)))
);