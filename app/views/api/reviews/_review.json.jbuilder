json.business_id review.business_id
json.business_name review.business.name
json.id review.id

json.user do
  json.username review.user.username
  json.id review.user.id
end

json.review_text review.review_text
json.rating review.rating

json.photos review.photos, :id, :url, :caption
