class Tag < ApplicationRecord

    has_many :businesses,
    dependent: :destroy

    
end
