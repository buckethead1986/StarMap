class AddChannelNameToChannel < ActiveRecord::Migration[5.1]
  def change
    add_column :channels, :channel_name, :string
  end
end
