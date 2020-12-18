class Api::V1::VideoFilesController < ApplicationController
  def index
    @video_files = VideoFile.all
    render json: @video_files.to_json
  end

  def create
    
  end
end
