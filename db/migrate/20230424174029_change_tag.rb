class ChangeTag < ActiveRecord::Migration[7.0]
  def change
    change_table :tags do |t|
     
      t.index :tag
    
    end
  end
end
