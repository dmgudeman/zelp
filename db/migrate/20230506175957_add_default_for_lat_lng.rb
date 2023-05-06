class AddDefaultForLatLng < ActiveRecord::Migration[7.0]
  def change
    change_column_default :businesses, :latlng, "(37.7879,m -122.4075)"
  end
end
