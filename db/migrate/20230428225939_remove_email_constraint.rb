class RemoveEmailConstraint < ActiveRecord::Migration[7.0]
  def change
    change_column :businesses, :email, :string, null: true
  end
end
