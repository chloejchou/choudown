json.extract! business,
  :id,
  :name,
  :street_address,
  :city,
  :state,
  :zip,
  :lat,
  :long,
  :price,
  :image_url,
  :website_url

json.ratings business.reviews.pluck(:rating)

json.tags business.tags.pluck(:name)
