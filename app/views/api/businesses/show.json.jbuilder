json.extract! @business, :id, :name, :address, :phone, :website, :cost, :latlng, :hours
json.imageUrls(@business.images.map { |file| file.url })

json.tags @business.tags do |tag|
  json.extract! tag
end

json.reviews @business.reviews do |review|
  json.extract! review, :id, :author_id, :business_id, :rating, :body
  json.photoUrl review.photo.attached? ? review.photo.url : nil
  json.authorName review.author.name 
end
