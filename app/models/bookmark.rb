class Bookmark < ActiveRecord::Base
  validates :user_id, :business_id, presence: true
  validates :business_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :business
end
