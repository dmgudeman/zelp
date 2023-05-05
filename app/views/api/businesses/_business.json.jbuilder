json.extract! business, :id, :name, :phone, :address, :website, :cost, :latlng, :hours
json.imageUrls business.images.map { |file| file.url } 
