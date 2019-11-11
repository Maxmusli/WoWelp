# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.delete_all
User.delete_all

business_1 = Business.create!(
  name: "test",
  address: "123 debugger", 
  city: "Orgrimmar", 
  state: "Kalimodor", 
  zipcode: "123123", 
  category: "Restaurant", 
  phone: "123123123",
  description: "Best Place in Orgrimmar"
)

business_2 = Business.create!(
  name: "test2",
  address: "456 debugger", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Bar", 
  phone: "123123123",
  description: "Best Place in Storwind"
)

business_3 = Business.create!(
  name: "test3",
  address: "789 debugger", 
  city: "Orgrimmar", 
  state: "Kalimodor", 
  zipcode: "123123", 
  category: "Bar", 
  phone: "123123123",
  description: "Best Bar in town!"
)

business_4 = Business.create!(
  name: "test4",
  address: "111 debugger", 
  city: "Stormwind", 
  state: "Eastern Kingdom", 
  zipcode: "123123", 
  category: "Restaurant", 
  phone: "123123123",
  description: "Best Restaurant in Stormwind!"
)


demo_user = User.create!(
  email: "guest123@gmail.com",
  fname: "Guest",
  lname: "Guest",
  password: "password"
)