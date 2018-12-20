@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description, :category, :channel_id
    json.view_count video.view_count
    json.channel_title video.user.username
    json.image_preview url_for(video.preview_image)
  end
end
