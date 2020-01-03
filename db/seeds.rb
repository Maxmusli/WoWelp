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
  lat: 37.803663,
  lng: -122.397870,
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
  lat: 37.783497, 
  lng: -122.426417,
  category: "Inn", 
  sub_category: "Restaurant",
  faction: "Alliance",
  phone: "(512)359-7532",
  parking: "Yes",
  take_out: "Yes",
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
  lat: 37.727984, 
  lng: -122.458535, 
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
  lat: 37.780714, 
  lng: -122.504286,
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
  lat: 37.799810, 
  lng: -122.474967,
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
  lat: 37.758684, 
  lng: -122.438560,
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
  lat: 37.761412, 
  lng: -122.414494,
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
  lat: 37.782593, 
  lng: -122.389891,
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
  price_range: "medium",
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
  reservation: "Yes",
  price_range: "medium",
  description: "The Burning Anvil is a blacksmithing shop found in the Valley of Honor in Orgrimmar. There is an Anvil inside and an Anvil & Forge on the outside to the right."
)
business_12 = Business.create!(
  name: "Miwana's Longhouse",
  address: "101 Valley of Wisdom", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Inn", 
  sub_category: "Restaurant",
  phone: "(412)355-1922",
  parking: "Yes",
  take_out: "Yes",
  reservation: "Yes",
  price_range: "expensive",
  description: "Miwana's Longhouse is the inn run by Miwana in the Valley of Wisdom of Orgrimmar. Hiwahi Three-Feathers, a tailoring trainer, can also be found inside the inn. An innkeeper and tailoring trainer can be found inside, while shaman trainers and a skinning trainer can be found outside, the shaman trainers standing around the bonfire."
)
business_13 = Business.create!(
  name: "Hall of Legends",
  address: "100 Valley of Strength", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Barrack", 
  sub_category: "Horde",
  phone: "(412)123-1111",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "expensive",
  description: "The Hall of Legends is the officer's barracks for the Horde. It is in the Valley of Strength, in Orgrimmar. In the center of the Hall is a table surrounded by four Horde: Chieftain Earthbind of Thunder Bluff, Advisor Willington of the Undercity, Blood Guard Hini'wana of the Darkspear Trolls, and Councilor Arial D'Anastasis of Silvermoon City. On the table are several maps of Azeroth, as well as an open book titled 'Military Ranks of the Horde & Alliance', which lists the old PvP ranks and accompanying insignias."
)
business_14 = Business.create!(
  name: "Goblin Slums",
  address: "255 Valley of Spirits", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Mechanic", 
  sub_category: "Inn",
  phone: "(412)777-5135",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "cheap",
  description: "The Goblin Slums was a district in Orgrimmar for the Bilgewater goblin refugees of Kezan opened after the Cataclysm. It connected to the Valley of Spirits, and was an oily, dirty place - similar to areas in Bilgewater Port. In addition to class and profession trainers, the area had its own innkeeper, auctioneer, and bankers."
)
business_15 = Business.create!(
  name: "Grommash Hold",
  address: "1 Valley of Strength", 
  city: "Orgrimmar", 
  state: "Kalimdor", 
  zipcode: "123123", 
  category: "Horde", 
  sub_category: "Horde",
  phone: "(412)000-0001",
  parking: "Yes",
  take_out: "No",
  reservation: "No",
  price_range: "luxury",
  description: "Grommash Hold is an enormous fortress located in the Valley of Strength in the orc capital of Orgrimmar. It is named after the orcish hero Grommash Hellscream, it is the seat of the Warchief of the Horde. Delegations from Silvermoon and the Undercity reside within, including paladin and priest trainers, as well as the trainer for archaeology."
)

# Stormwind Businesses

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

business_16 = Business.create!(
  name: "Blue Recluse",
  address: "155 Mage Quarter", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Restaurant", 
  sub_category: "Bar",
  faction: "Alliance",
  phone: "(855)577-8486",
  parking: "Yes",
  take_out: "Yes",
  reservation: "Yes",
  price_range: "expensive",
  description: "The Blue Recluse is a restaurant in the Mage Quarter of Stormwind City. According to Thassarian, this inn is known for its food, drinks and good conversations. It's also renowned around the world for its apparent classy atmosphere. While not being mentioned by the guards as being one of the most popular bar, it certainly has the most reputation in the entire city. Many hunters come here for a drink just like Hemet Nesingwary, he came here once and told the story to Flint Broadshot of how he found himself guarding three Frostsaber cubs from unscrupulous human hunters in Winterspring, which earned him his fame. Thassarian, the first Death Knight to rejoin the Alliance also came here to have an ale as soon as he spoke with King Varian."
)

business_17 = Business.create!(
  name: "Great Forge",
  address: "120 Trade District", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Blacksmithing", 
  sub_category: "Tailoring",
  faction: "Alliance",
  phone: "(855)757-2453",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "expensive",
  description: "The Great Forge is the heart and soul of dwarven culture, where ingenious creations and weapons are made. Located at the center of the city, it gave the ancient dwarf capital its name. At its center is the famed Great Anvil, where most of the best dwarven blacksmithing trainers can be found. Ringed around the Great Forge are several foundries pouring molten slag and a great deal of shops and guild offices, including trainers for cooking, mining, first aid, tailoring and leatherworking, as well as the High Seat, the court of the King Magni Bronzebeard. Ironforge's gryphon master is also located here. The current keeper of the Great Forge is Myolor Sunderfury."
)

business_18 = Business.create!(
  name: "Craftsmen's Terrace",
  address: "100 Night Elf District", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Jewelry Shop", 
  sub_category: "Mechanic",
  faction: "Alliance",
  phone: "(855)767-1000",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "luxury",
  description: "The Craftsmen's Terrace is a major district in the north of the Stormwind. The terrace is home to most of Darnassus's profession trainers and shops, and contains one of the city's primary inns. Guild services are available here, while an embassy of the Argent Dawn faction is also present. The Craftsmen's Terrace can be accessed from the Warrior's Terrace to the south, and the Cenarion Enclave and Howling Oak to the west and northwest."
)

business_19 = Business.create!(
  name: "Stormwind Barber Shop",
  address: "150 Trade District", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Barber", 
  sub_category: "Alliance",
  faction: "Alliance",
  phone: "(855)205-1212",
  parking: "Yes",
  take_out: "No",
  reservation: "Yes",
  price_range: "cheap",
  description: "The Stormwind Barber Shop is a barbershop located in the Trade District of Stormwind City."
)

business_20 = Business.create!(
  name: "Royal Library",
  address: "110 Mage Quarter", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Library", 
  sub_category: "Alliance",
  faction: "Alliance",
  phone: "(855)354-0032",
  parking: "No",
  take_out: "No",
  reservation: "No",
  price_range: "medium",
  description: "The Royal Library (or the Stormwind Library) of Stormwind is located inside Stormwind Keep. There is an extensive collection of scrolls, tomes, books, and texts on anything of historical, religious, cultural, or bureaucratic significance here, and adventurers from all races of the Alliance come here to peruse the lore. Milton Sheaf seems to be the head librarian."
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