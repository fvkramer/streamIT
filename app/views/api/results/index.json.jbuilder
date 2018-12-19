json.array! @videos do |video|
 json.id video.id
 json.title video.title
 json.description video.description
 json.category video.category
 json.channel_title video.user.username
 json.channel_id video.channel_id
 json.thumbnail url_for(video.preview_image)
 json.view_count video.views.count
end
