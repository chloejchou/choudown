export const fetchBookmarks = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookmarks`
  })
);
