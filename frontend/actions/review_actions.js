import * as APIUtil from "../util/review_api_util";

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

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchReviews = productId => dispatch => (
  APIUtil.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId, productId) => dispatch => (
  APIUtil.fetchReview(reviewId, productId)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = (review, productId) => dispatch => (
  APIUtil.createReview(review, productId)
    .then(review => dispatch(receiveReview(review)))
);

export const updateReview = (review, productId) => dispatch => (
  APIUtil.updateReview(review, productId)
    .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (review, productId) => dispatch => (
  APIUtil.deleteReview(review, productId)
    .then(review => dispatch(removeReview(review.id)))
);