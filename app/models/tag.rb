class Tag < ApplicationRecord

    has_many :business_tags
    has_many :businesses,  through: :business_tags
    # dependent: :destroy

    
end
