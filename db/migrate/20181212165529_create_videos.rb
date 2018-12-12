class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description
      t.integer :length
      t.string :category
      t.integer :channel_id

      t.timestamps
    end

    add_index :videos, :title, unique: true
    add_index :videos, :channel_id
  end
end
