export const fetchBusinesses = (tag, price) => {
  let url;
  if (price) {
    url = `api/businesses?tag=${tag}&price=${price}`;
  } else {
    url = `api/businesses?tag=${tag}&price`;
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
