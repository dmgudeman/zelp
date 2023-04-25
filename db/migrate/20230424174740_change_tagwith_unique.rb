class ChangeTagwithUnique < ActiveRecord::Migration[7.0]
  def change
    
     
     remove_index :tags, :tag

  end
end
