class Api::UsersController < ApplicationController 
    def show
      @user = User.find(params[:id])
      @videos = @user.videos.with_attached_video.with_attached_preview_image
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end