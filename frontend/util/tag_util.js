export const fetchTags = name => (
  $.ajax({
    method: 'GET',
    url: `/api/tags?name=${name}`
  })
);
