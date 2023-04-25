class BusinessTagJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :businesses, :tags do |t|
      t.index :business_id
      t.index :tag_id
      t.timestamps
    end
  end
end
