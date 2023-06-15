json.extract! @business, :id, :name, :address, :phone, :rating, :website, :cost, :latlng, :hours
json.imageUrls(@business.images.map { |file| file.url })

json.tags @business.tags do |tag|
  json.extract! tag
end

# json.reviews @business.reviews do |review|
json.reviews @business.reviews.sort_by(&:updated_at).reverse! do |review|
  json.author_name review.author.username
  json.extract! review, :id, :author_id, :business_id, :rating, :body, :updated_at
  json.photoUrl review.photo.attached? ? review.photo.url : nil
end
