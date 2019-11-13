# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.delete_all
User.delete_all

# Dalaran businesses

business_1 = Business.create!(
  name: "Beer Garden",
  address: "110 Silver Enclave", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Bar", 
  sub_category: "Alliance"
  phone: "(512)359-8640",
  parking: "Yes",
  take_out: "Yes",
  reservation: "No",
  price_range: "$$",
  description: "The Beer Garden is a tranquil area for the alliance members of Dalaran to sit down, have a drink of the greatest beer, or just find some peace from other players. As such, it is strictly Alliance territory in Dalaran, and all members of the Horde will be teleported out if they manage to find a way into the garden."
)

business_2 = Business.create!(
  name: "A Hero's Welcome",
  address: "120 Silver Enclave", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Inn", 
  sub_category: "Restaurant",
  phone: "(512)359-7532",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "$$$",
  description: "A Hero's Welcome is an inn located at the Silver Enclave of Dalaran. Isirami Fairwind is the innkeeper here, and Caliel Brightwillow is assistant innkeeper. Inzi and Marcella are the bar maidens that serve drinks to the patrons inside. Katherine and Derek are the chefs of the inn and cook food for hungry people."
)

business_3 = Business.create!(
  name: "The Filthy Animal",
  address: "130 Sunreaver's Sanctuary", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Inn", 
  sub_category: "Restaurant",
  phone: "(512)432-1103",
  parking: "Yes",
  take_out: "Yes",
  reservation: "No",
  price_range: "$$$",
  description: "The Filthy Animal is the Horde inn, located within the Sunreaver's Sanctuary district, in Dalaran. Uda the Beast is the innkeeper and she has two wolves, Nargut and Rhukah."
)

business_4 = Business.create!(
  name: "Tanks for Everything",
  address: "114 Magus Commerce Exchange", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Blacksmithing", 
  phone: "(512)366-6721",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "$$$",
  description: "Tanks for Everything is a blacksmithing shop found in the Magus Commerce Exchange in Dalaran. The proprietor is Alard Schmied. On its sign there is a raven, indicating the shop is an entrance to the Uncrowned's Hall of Shadows."
)

business_5 = Business.create!(
  name: "Kizi's Hair Salon",
  address: "252 Sunreaver's Sanctuary", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Barber", 
  phone: "(512)444-1212",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "$$",
  description: "Kizi's Hair Salon is the finest and ONLY barber/beauty shop in town. YOU DON'T GET TO CHOOSE!"
)

business_6 = Business.create!(
  name: "Like Clockwork",
  address: "116 Magus Commerce Exchange", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Mechanic", 
  phone: "(512)123-1122",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "$$$",
  description: "Like Clockwork is an engineering shop found in the Magus Commerce Exchange in Dalaran."
)

business_7 = Business.create!(
  name: "Cartier & Co. Fine Jewelry",
  address: "207 Magus Commerce Exchange", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Jewelry Shop", 
  phone: "(512)555-9999",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "$$$$",
  description: "Cartier & Co. Fine Jewelry ('Co.' being short for Company) is a jewelry shop found in the Magus Commerce Exchange in the city of Dalaran. It also serves as a place where jewelcrafters go to learn new cuts."
)

business_8 = Business.create!(
  name: "Talismanic Textiles",
  address: "218 Magus Commerce Exchange", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Tailoring", 
  phone: "(512)253-3311",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "$$$",
  description: "Talismanic Textiles is a tailoring shop found in the Magus Commerce Exchange in Dalaran the proprietor is Charles Worth."
)

# Orgrimmar Businesses

business_9 = Business.create!(
  name: "The Broken Tusk",
  address: "119 Valley of Strength", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Bar", 
  phone: "(412)694-3624",
  parking: "No",
  take_out: "No",
  reservation: "No",
  price_range: "$",
  description: "The Broken Tusk is the one of several inns of Orgrimmar, this one located within the Valley of Strength near the Orgrimmar General Store and Auction House. Its most famous resident is Gamon, long beset by members of his own faction due to his formerly low level."
)

business_10 = Business.create!(
  name: "Burning Anvil",
  address: "110 Valley of Honor", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Blacksmithing", 
  phone: "(412)253-3524",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "$$",
  description: "The Burning Anvil is a blacksmith shop found in the Valley of Honor in Orgrimmar. There is an Anvil inside and an Anvil & Forge on the outside to the right."
)



demo_user = User.create!(
  email: "guest123@gmail.com",
  fname: "Guest",
  lname: "Guest",
  password: "password"
)