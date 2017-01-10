class Business < ActiveRecord::Base
  validates :user, :name, :street_address, :city, :state, :zip, :price, :image_url, presence: true
  validates :price, inclusion: { in: [1, 2, 3] }

  belongs_to :user
  has_many :photos
  has_many :reviews
  has_many :taggings
end
