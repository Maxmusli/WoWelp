class AddColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hobby, :text
    add_column :users, :gender, :string
    add_column :users, :faction, :string
  end
end
