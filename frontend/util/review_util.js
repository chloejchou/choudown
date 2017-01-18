export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const createReview = (businessId, review) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ review })
  })
);

export const fetchPersonalReviews = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/reviews`
  })
);

export const destroyReview = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/reviews/${id}`
    })
  );
};
