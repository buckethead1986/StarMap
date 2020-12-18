class User < ApplicationRecord
  has_many :video_files
  has_many :channels, through: :video_files
end
