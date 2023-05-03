class Business < ApplicationRecord
    validates :name, :phone, presence: true
    # validates :email,
    #     uniqueness: true,
    #     length: { in: 3..255 },
    #     format: { with: URI::MailTo::EMAIL_REGEXP },
    #     allow_nil: true
    

    has_many :business_tags
    has_many :tags, through: :business_tags

    has_many :reviews,
    dependent: :destroy
   
    # dependent: :destroy


    has_many_attached :images


end
