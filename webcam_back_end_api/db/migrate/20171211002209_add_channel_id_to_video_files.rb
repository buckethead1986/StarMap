class AddChannelIdToVideoFiles < ActiveRecord::Migration[5.1]
  def change
    add_column :video_files, :channel_id, :integer
  end
end
