
  json.partial! "business", business: @business
  json.hello "hello"
  json.reviewIds @business.reviews.pluck(:id)


# @business.reviews.includes(:author).each do |review|
#   json.reviews do 
#     json.set! review.id do
#       json.partial! '/api/reviews/review', review: review
#     end
#   end

#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :fname
#     end
#   end
# end