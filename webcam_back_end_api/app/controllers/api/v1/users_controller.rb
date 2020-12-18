class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json(:include => :video_files)
  end

  def show
    byebug
  end

  def new
    byebug
  end

  def create
    @user = User.create(username: params[:username])
    render json: @user.to_json
  end

  private

  def user_params
    params.require(:users).permit(:username)
  end
end
