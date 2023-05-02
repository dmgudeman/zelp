class RemoveEmailLatLngFromBusinesses < ActiveRecord::Migration[7.0]
  def change
    remove_column :businesses, :email, :string
    remove_column :businesses, :lat, :decimal
    remove_column :businesses, :lng, :decimal
  end
end
