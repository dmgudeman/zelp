class Review < ApplicationRecord
  validates :body, presence: true

  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 },
                     allow_blank: true

  has_one_attached :photo
  belongs_to :author,
             class_name: 'User',
             dependent: :destroy

  belongs_to  :business,
              class_name: 'Business',
              dependent: :destroy
end
