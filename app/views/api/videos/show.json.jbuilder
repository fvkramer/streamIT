json.extract! @video, :id, :title, :description, :length, :category, :channel_id
json.src url_for(@video.video)
json.thumbnail url_for(@video.preview_image)