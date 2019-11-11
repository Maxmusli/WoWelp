# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zipcode       :string           not null
#  category      :string           not null
#  sub_category  :string
#  description   :string
#  business_hour :string
#  latitude      :float
#  longitude     :float
#  phone         :string           not null
#  parking       :string
#  take_out      :string
#  reservation   :string
#  price_range   :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zipcode, 
    :category, :phone, presence: true

  def self.near_location(location)
    Business.where("city LIKE ? or address LIKE ?", "%#{location}%", "%#{location}%")
  end

  def self.find_business(category)
    Business.where("category LIKE ? or sub_category LIKE ? or name LIKE ?", "%#{category}%", "%#{category}%", "%#{category}%")
  end
end
