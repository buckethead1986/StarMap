class CreateVideoFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :video_files do |t|
      t.integer :user_id
      t.string :image_src
      t.timestamps
    end
  end
end
