class Photo < ActiveRecord::Base
  validates :business, :user, :url, presence: true

  belongs_to :business
  belongs_to :user
  belongs_to :review
end
