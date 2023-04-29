json.extract! business, :id, :name, :phone, :email, :website, :cost, :lat, :lng
json.imageUrls business.images.map { |file| file.url } 
