export const fetchReviews = productId => (
  $.ajax({
    method: "GET",
    url: `api/products/${productId}/reviews`
  })
);

export const fetchReview = (reviewId, productId) => (
  $.ajax({
    method: "GET",
    url: `api/products/${productId}/reviews/${reviewId}`
  })
);

export const createReview = (review, productId) => (
  $.ajax({
    method: "POST",
    url: `api/products/${productId}/reviews`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`
  })
);