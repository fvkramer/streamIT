json.extract! @video, :id, :title, :description, :length, :category, :channel_id, :created_at
json.view_count @video.views.count
json.src url_for(@video.video)
json.thumbnail url_for(@video.preview_image)
json.channel_title @video.user.username