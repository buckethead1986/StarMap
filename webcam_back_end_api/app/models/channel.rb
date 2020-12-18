class Channel < ApplicationRecord
  has_many :video_files
  has_many :users, through: :video_files
end
