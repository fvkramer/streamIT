export const searchVideos = searchQuery => (
  $.ajax({
    method: 'GET',
    url: "api/results/",
    data: {searchQuery}
  })
)