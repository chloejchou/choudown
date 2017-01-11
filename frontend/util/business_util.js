export const fetchBusinesses = (tag) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/businesses?tag=${tag}`
    })
  );
};

export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);
