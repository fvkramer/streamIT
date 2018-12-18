json.extract! @user, :id, :username
json.channel_videos @videos do |video|
  json.extract! video, :id, :title, :description, :channel_id
  json.src url_for(video.video)
  json.thumbnail url_for(video.preview_image)
end