json.partial! 'business', business: @business

json.photos @business.photos, :id, :user_id, :business_id, :review_id, :url, :caption

json.reviews @business.reviews, :id, :business_id, :user_id, :review_text, :rating, :photos
