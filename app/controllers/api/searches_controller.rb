class Api::ResultsController < ApplicationController
  def index
    params[:searchQuery]
    
    redirect_to :index
  end
end