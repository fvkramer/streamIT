class Api::ResultsController < ApplicationController 
  def index
    search_query = params[:searchQuery]
    @videos = Video.all.where('title ~* ?', search_query)
  end

  def recommended_search 
    category = params[:category]
    @videos = Video.where('category ~* ?', category)
    render :index
  end
end