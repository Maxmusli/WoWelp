# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer
#  business_id :integer
#  body        :text
#  rating      :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :business
  belongs_to :author,
    class_name: :User
end
