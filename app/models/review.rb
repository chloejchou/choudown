class Review < ActiveRecord::Base
  validates :business, :user, :review_text, :rating, presence: true

  belongs_to :business
  belongs_to :user
end
