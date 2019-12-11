# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.delete_all
User.delete_all

# Dalaran businesses

business_1 = Business.create!(
  name: "Beer Garden",
  address: "110 Silver Enclave", 
  city: "Dalaran", 
  state: "Northrend", 
  zipcode: "123123", 
  category: "Bars", 
  sub_category: "Alliance",
  phone: "(512)359-8640",
  parking: "Yes",
  take_out: "Yes",
  reservation: "No",
  price_range: "medium",
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
  faction: "Alliance",
  phone: "(512)359-7532",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "expensive",
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
  faction: "Horde",
  phone: "(512)432-1103",
  parking: "Yes",
  take_out: "Yes",
  reservation: "No",
  price_range: "expensive",
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
  price_range: "expensive",
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
  price_range: "medium",
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
  price_range: "expensive",
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
  price_range: "luxury",
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
  price_range: "expensive",
  description: "Talismanic Textiles is a tailoring shop found in the Magus Commerce Exchange in Dalaran the proprietor is Charles Worth."
)

# Orgrimmar Businesses

business_9 = Business.create!(
  name: "The Broken Tusk",
  address: "119 Valley of Strength", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Bars", 
  sub_category: "Horde",
  phone: "(412)694-3624",
  parking: "No",
  take_out: "No",
  reservation: "No",
  price_range: "cheap",
  description: "The Broken Tusk is the one of several inns of Orgrimmar, this one located within the Valley of Strength near the Orgrimmar General Store and Auction House. Its most famous resident is Gamon, long beset by members of his own faction due to his formerly low level."
)

business_10 = Business.create!(
  name: "Burning Anvil",
  address: "110 Valley of Honor", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Blacksmithing", 
  sub_category: "Horde",
  phone: "(412)253-3524",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "medium",
  description: "The Burning Anvil is a blacksmithing shop found in the Valley of Honor in Orgrimmar. There is an Anvil inside and an Anvil & Forge on the outside to the right."
)

business_11 = Business.create!(
  name: "Golden Keg",
  address: "111 Dwarven District", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Inn", 
  sub_category: "Restaurant",
  faction: "Alliance",
  phone: "(855)334-1002",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "medium",
  description: "The Golden Keg is the inn and tavern located in the Dwarven District of Stormwind City."
)

file1 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/aheroswelcome.jpg')
file2 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/aheroswelcome_01.jpg')
file3 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/aheroswelcome_02.jpg')
file4 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/aheroswelcome_03.jpg')
file5 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/aheroswelcome_04.jpg')

business_2.pictures.attach(io: file1, filename: 'aheroswelcome.jpg')
business_2.pictures.attach(io: file2, filename: 'aheroswelcome_01.jpg')
business_2.pictures.attach(io: file3, filename: 'aheroswelcome_02.jpg')
business_2.pictures.attach(io: file4, filename: 'aheroswelcome_03.jpg')
business_2.pictures.attach(io: file5, filename: 'aheroswelcome_04.jpg')

file6 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/bar/bar_01.jpg')
file7 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/bar/bar_02.jpg')
file8 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/bar/bar_03.jpg')
file9 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/bar/bar_04.jpg')
file_busi01_05 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/bar/bar_05.jpeg')

business_1.pictures.attach(io: file6, filename: 'bar_01.jpg')
business_1.pictures.attach(io: file7, filename: 'bar_02.jpg')
business_1.pictures.attach(io: file8, filename: 'bar_03.jpg')
business_1.pictures.attach(io: file9, filename: 'bar_04.jpg')
business_1.pictures.attach(io: file_busi01_05, filename: 'bar_05.jpeg')

file10 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/thefilthyanimal_04.jpg')
file11 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/thefilthyanimal_01.jpg')
file12 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/thefilthyanimal_02.jpg')
file13 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/thefilthyanimal_03.jpg')
file_busi03_05 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/inn/thefilthyanimal_05.jpg')

business_3.pictures.attach(io: file10, filename: 'thefilthyanimal_04.jpg')
business_3.pictures.attach(io: file11, filename: 'thefilthyanimal_01.jpg')
business_3.pictures.attach(io: file12, filename: 'thefilthyanimal_02.jpg')
business_3.pictures.attach(io: file13, filename: 'thefilthyanimal_03.jpg')
business_3.pictures.attach(io: file_busi03_05, filename: 'thefilthyanimal_05.jpg')

file14 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/blacksmithing/tanksforeverthing_02.jpg')
file15 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/blacksmithing/tanksforeverthing_01.jpg')
file16 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/blacksmithing/tanksforeverthing_03.jpg')
file_busi04_04 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/blacksmithing/tanksforeverthing_04.jpg')
file_busi04_05 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/blacksmithing/tanksforeverthing_05.png')

business_4.pictures.attach(io: file14, filename: 'tanksforeverthing_02.jpg')
business_4.pictures.attach(io: file15, filename: 'tanksforeverthing_01.jpg')
business_4.pictures.attach(io: file16, filename: 'tanksforeverthing_03.jpg')
business_4.pictures.attach(io: file_busi04_04, filename: 'tanksforeverthing_04.jpg')
business_4.pictures.attach(io: file_busi04_05, filename: 'tanksforeverthing_05.png')

file17 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/barber/barbershop_dalaran.jpg')
file18 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/barber/barbershop_dalaran_02.jpg')
file19 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/barber/barbershop_dalaran_03.jpg')

business_5.pictures.attach(io: file17, filename: 'barbershop_dalaran.jpg')
business_5.pictures.attach(io: file18, filename: 'barbershop_dalaran_02.jpg')
business_5.pictures.attach(io: file19, filename: 'barbershop_dalaran_03.jpg')

file20 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/mechanic/Like_Clockwork_01.jpg')

business_6.pictures.attach(io: file20, filename: 'Like_Clockwork_01.jpg')

file21 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/jewelry/Cartier_Jewelry_01.jpg')

business_7.pictures.attach(io: file21, filename: 'Cartier_Jewelry_01.jpg')

file22 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/dalaran/tailoring/Talismanic_Textiles_01.jpg')

business_8.pictures.attach(io: file22, filename: 'Talismanic_Textiles_01.jpg')

file23 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/blacksmithing/The_Burning_Anvil_02.jpg')
file24 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/blacksmithing/The_Burning_Anvil_01.jpg')
file25 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/blacksmithing/The_Burning_Anvil_03.png')
file_busi10_04 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/blacksmithing/The_Burning_Anvil_04.png')
file_busi10_05 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/blacksmithing/The_Burning_Anvil_06.jpg')

business_10.pictures.attach(io: file23, filename: 'The_Burning_Anvil_02.jpg')
business_10.pictures.attach(io: file24, filename: 'The_Burning_Anvil_01.jpg')
business_10.pictures.attach(io: file25, filename: 'The_Burning_Anvil_03.png')
business_10.pictures.attach(io: file_busi10_04, filename: 'The_Burning_Anvil_04.png')
business_10.pictures.attach(io: file_busi10_05, filename: 'The_Burning_Anvil_06.jpg')

file26 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/bar/The_Broken_Tusk_01.jpg')
file27 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/orgrimmar/bar/The_Broken_Tusk_Interior_02.jpg')

business_9.pictures.attach(io: file26, filename: 'The_Broken_Tusk_01.jpg')
business_9.pictures.attach(io: file27, filename: 'The_Broken_Tusk_Interior_02.jpg')

file_busi11_01 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/stormwind/Inn/golden_keg_01.jpg')
file_busi11_02 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/stormwind/Inn/golden_keg_02.jpg')
file_busi11_03 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/stormwind/Inn/golden_keg_03.jpg')
file_busi11_04 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/stormwind/Inn/golden_keg_04.png')
file_busi11_05 = open('https://wowelp-seeds.s3-us-west-1.amazonaws.com/stormwind/Inn/golden_keg_05.jpg')

business_11.pictures.attach(io: file_busi11_01, filename: 'golden_keg_01.jpg')
business_11.pictures.attach(io: file_busi11_02, filename: 'golden_keg_02.jpg')
business_11.pictures.attach(io: file_busi11_03, filename: 'golden_keg_03.jpg')
business_11.pictures.attach(io: file_busi11_04, filename: 'golden_keg_04.png')
business_11.pictures.attach(io: file_busi11_05, filename: 'golden_keg_05.jpg')

demo_user = User.create!(
  email: "guest123@gmail.com",
  fname: "Guest",
  lname: "Guest",
  password: "password"
)