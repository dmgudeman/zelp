class Business < ApplicationRecord
    validates :name, :phone, :lat, :lng, presence: true
    validates :email,
        uniqueness: true,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP },
        allow_nil: true

    has_many :tags,
    dependent: :destroy

    has_many :reviews,
    dependent: :destroy

    has_many_attached :images


end
