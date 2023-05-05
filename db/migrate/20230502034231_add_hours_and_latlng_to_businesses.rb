class AddHoursAndLatlngToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :hours, :json
    add_column :businesses, :latlng, :json, null:false
  end
end
