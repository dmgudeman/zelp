class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.references :business, null: false, foreign_key: true
      t.integer :rating
      t.text :body

      t.timestamps
    end
  end
end
