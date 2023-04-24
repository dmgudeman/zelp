class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :address, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :website
      t.string :cost, null: false
      t.decimal :lat, null: false
      t.decimal :lng, null: false

      t.timestamps
    end
  end
end
