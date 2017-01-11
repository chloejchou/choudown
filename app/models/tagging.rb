class Tagging < ActiveRecord::Base
  validates :business_id, :tag_id, presence: true
  validates :business_id, uniqueness: { scope: :tag_id }
  belongs_to :tag
  belongs_to :business
end
