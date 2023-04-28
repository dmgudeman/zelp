json.extract! @business, :id, :name, :phone, :email, :website, :cost, :lat, :lng
json.reviews @business.reviews do |review|
  json.extract! review, :id, :author_id, :business_id, :rating, :body
  json.photoUrl review.photo.attached? ? review.photo.url : nil
end
