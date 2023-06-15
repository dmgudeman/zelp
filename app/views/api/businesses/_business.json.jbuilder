json.extract! business, :id, :name, :phone, :address, :website, :rating, :cost, :latlng, :hours
json.imageUrls business.images.map { |file| file.url } 
