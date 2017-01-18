@businesses.each do |business|
  json.set! business.id do
    json.partial! 'bookmark', business: business
  end
end
