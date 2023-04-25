class ChangeTagwithUniqueAgain < ActiveRecord::Migration[7.0]
  def change
    add_index :tags, :tag, unique: true
  end
end
