export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const createReview = (businessId) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`
  })
);
