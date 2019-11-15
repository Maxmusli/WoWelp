class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :category, null: false
      t.string :sub_category
      t.string :description
      t.string :business_hour
      t.float :latitude
      t.float :longitude
      t.string :phone, null: false
      t.string :parking
      t.string :take_out
      t.string :reservation
      t.string :price_range
      t.string :faction

      t.timestamps
    end

    add_index :businesses, :name, unique: true
    add_index :businesses, :address, unique: true
  end
end
