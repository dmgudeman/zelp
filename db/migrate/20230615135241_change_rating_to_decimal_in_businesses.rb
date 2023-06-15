class ChangeRatingToDecimalInBusinesses < ActiveRecord::Migration[7.0]
  def change
    change_column :businesses, :rating, :decimal, precision: 3, scale: 2
  end
end
