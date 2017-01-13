json.partial! 'business', business: @business


json.photos @business.photos do |photo|
  json.user do
    json.username photo.user.username
    json.id photo.user.id
  end

  json.id photo.id
  json.business_id photo.business_id
  json.review_id photo.review_id
  json.url photo.url
  json.caption photo.caption
end

json.reviews @business.reviews do |review|
  json.user do
    json.username review.user.username
    json.id review.user.id
  end

  json.id review.id
  json.business_id review.business_id
  json.review_text review.review_text
  json.rating review.rating
  json.photos review.photos
end
