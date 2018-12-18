export const fetchUserChannel = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
)