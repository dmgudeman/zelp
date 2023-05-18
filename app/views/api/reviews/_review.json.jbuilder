json.extract! review, :id, :author_id, :business_id, :rating, :body
json.photoUrl review.photo.attached? ? url_for(review.photo) : nil
