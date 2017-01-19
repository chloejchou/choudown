class Review < ActiveRecord::Base
  validates :business, :user, :review_text, :rating, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }

  belongs_to :business
  belongs_to :user
  has_many :photos, dependent: :destroy
end
