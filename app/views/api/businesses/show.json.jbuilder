
  json.extract! @business, :id, :name, :address, :phone, :website, :cost, :latlng, :hours
  json.imageUrls (@business.images.map {|file| file.url})


  json.tags @business.tags do |tag|
    json.extract! tag, :id, :business_id, :tag_id
  end

json.reviews @business.reviews do |review|
  json.extract! review, :id, :author_id, :business_id, :rating, :body
  json.photoUrl review.photo.attached? ? review.photo.url : nil

  
end


