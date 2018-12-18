class Api::ResultsController < ApplicationController 
  def index
    search_query = params[:searchQuery]
    @videos = Video.select(*).where('title LIKE ?', search_query)
  end
end