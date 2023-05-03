class RenameBusinessesTags < ActiveRecord::Migration[7.0]
  def change
    rename_table :businesses_tags, :business_tags
  end
end
