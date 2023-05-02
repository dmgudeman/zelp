
json.extract! review, :id, :author_id, :business_id, :rating, :body
json.photoUrl review.photo.attached? ? review.photo.url : nil