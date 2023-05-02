class RemoveLatLngNullConstraintFromBusinesses < ActiveRecord::Migration[7.0]
  def change
    change_column_null :businesses, :latlng, true
  end
end
