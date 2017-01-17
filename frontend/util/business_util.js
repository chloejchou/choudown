export const fetchBusinesses = (tag, price, page) => {
  let url;
  if (price) {
    url = `api/businesses?page=${page}&tag=${tag}&price=${price}`;
  } else {
    url = `api/businesses?page=${page}&tag=${tag}&price`;
  }

  return(
    $.ajax({
      method: 'GET',
      url
    })
  );
};

export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const fetchFeaturedBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/featured/${id}`
  })
);
