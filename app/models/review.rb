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
end
