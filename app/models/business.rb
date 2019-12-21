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

  has_many :reviews

  has_many_attached :pictures

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.near_location(location)
    Business.where(
      "lower(city) LIKE ? or lower(address) LIKE ?", 
      "%#{location.downcase}%", 
      "%#{location.downcase}%"
    )
  end

  def self.find_business(category)
    Business.where(
      "lower(category) LIKE ? or lower(sub_category) LIKE ? or lower(name) LIKE ?",
      "%#{category[1..3].downcase}%", 
      "%#{category[1..3].downcase}%", 
      "%#{category[1..3].downcase}%"
    )
  end

  def average_rating
    reviews.average(:rating)
  end
end
