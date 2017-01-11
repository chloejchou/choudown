class Business < ActiveRecord::Base
  validates :user, :name, :street_address, :city, :state, :zip, :price, :image_url, :lat, :long, presence: true
  validates :name, uniqueness: true
  validates :price, inclusion: { in: ["$", "$$", "$$$", "$$$$"] }

  belongs_to :user
  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag
end
