class VideosController < ApplicationController
  #need to query search results to show only a few videos
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def video_params
    params.require(:videos).permit(:title)
  end
end