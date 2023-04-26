class Business < ApplicationRecord
    validates :name, :phone, :email, :lat, :lng, presence: true
    validates :email,
            uniqueness: true,
            length: { in: 3..255 },
            format: { with: URI::MailTo::EMAIL_REGEXP }

    has_many :tags,
    dependent: :destroy

    has_many :reviews,
    dependent: :destroy


end
