json.extract! business, :id, :name, :address, :city, :state, 
:zipcode, :category, :sub_category, :description, :business_hour, 
:latitude, :longitude, :phone, :average_rating, :price_range, :reservation,
:take_out

json.pictureUrls business.pictures.map { |file| url_for(file) }