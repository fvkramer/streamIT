class Api::VideosController < ApplicationController
  #need to query search results to show only a few videos
  def index
    @videos = Video.select(:title, 'COUNT(*) as views')
                    .joins(:views)
                    .group('title')
                    .order('views DESC')
                    .limit(10) 
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)
    if @video.save!
      render 'api/video/show'
    else 
      render json: @video.errors.full_messages
    end
  end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render 'api/video/show'
    else 
      render json: @video.errors.full_messages
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.delete!

  end

  private
  def video_params
    params.require(:videos).permit(:title)
  end
end