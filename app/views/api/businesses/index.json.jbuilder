@businesses.each do |business|
    json.set! business.id do 
      json.partial! 'api/businesses/business', business: business
      json.reviews @reviews do |review|
        
      end
    end

end
