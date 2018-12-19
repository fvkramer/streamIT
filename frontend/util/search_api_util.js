export const searchVideos = searchQuery => (
  $.ajax({
    method: 'GET',
    url: "api/results/",
    data: {searchQuery}
  })
)

export const findRecommendedVideos = category => (
  $.ajax({
    method: 'GET',
    url: "api/results/:category",
    data: {category}
  })
)