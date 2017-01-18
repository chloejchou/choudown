export const fetchBookmarks = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookmarks`
  })
);

export const createBookmark = (businessId) => (
  $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/bookmarks`,
    data: { businessId }
  })
);

export const deleteBookmark = (businessId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/businesses/${businessId}/bookmarks`
  })
);
