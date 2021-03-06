json.partial! '/api/users/user', user: @user
json.reviewIds @user.reviews.pluck(:id)


@user.reviews.includes(:business).each do |review|
  json.reviews do 
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end

  json.businesses do
    json.set! review.business.id do
      json.extract! review.business, :id, :name, :address, :category, :average_rating
      json.pictureUrls review.business.pictures.map { |file| url_for(file) }
    end
  end
end