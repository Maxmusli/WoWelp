json.extract! review, :id, :body, :rating, :business_id, :author_id
json.username review.author.fname