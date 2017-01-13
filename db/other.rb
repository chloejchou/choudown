user1 = User.create!(username: "chef_curry", password: "2password")
user2 = User.create!(username: "pita_pan", password: "3password")
user3 = User.create!(username: "lord_of_the_wings", password: "4password")
user4 = User.create!(username: "the_codfather", password: "5password")
user5 = User.create!(username: "lord_of_the_fries", password: "6password")
user6 = User.create!(username: "brewed_awakening", password: "7password")
user7 = User.create!(username: "life_of_pie", password: "8password")
user8 = User.create!(username: "count_spatula", password: "9password")
user9 = User.create!(username: "just_falafs", password: "10password")
user10 = User.create!(username: "i_love_food", password: "11password")
user11 = User.create!(username: "brunch_lover", password: "12password")
user12 = User.create!(username: "hungry_hippo", password: "13password")
user13 = User.create!(username: "hangry", password: "14password")
user14 = User.create!(username: "foodie4lyfe", password: "15password")
user15 = User.create!(username: "the_gouda_life", password: "16password")

user_array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11]

review_array = [
  {"rating" => 1, "review" => "The entire kitchen and wait staff saw an ice cream truck and ran outside, leaving me alone in the restaurant. 10 minutes later they all came back with ice cream cones. I still cant believe this actually happened." },
  {"rating" => 2, "review" => "They didn't have any avocado...enough said." },
  {"rating" => 3, "review" => "My food tasted like it had been sitting out for half an hour. On another note, what an awesome staff manning the orders. Keep up the smiles!" },
  {"rating" => 4, "review" => "Definitely a touristy spot. They can get kinda busy and don't have a ton of seating, but they do have a ton of delicious food. It helps that the food is great." },
  {"rating" => 5, "review" => "Service here is fast, friendly and efficient- in a fast casual atmosphere. If you don't walk in expecting a fine dining experience, you will leave with your belly satisfied and you happy. It's cheap and the portions are generous." },

  {"rating" => 1, "review" => "I almost didn't want to write a review about this amazing restaurant because I didn't want to risk too many people hearing about this place. So I decided to give it one star instead." },
  {"rating" => 2, "review" => "This was just so-so. I had high expectations for this place given its location in a foodie city, and a let down is an understatement. The food smelled great, but the taste was lacking." },
  {"rating" => 3, "review" => "The place is tiny, there is no sign outside so you can easily miss it.  The food was not the greatest, it was just ok.  On the other hand, the guacamole was really good. The food was way too overpriced for the size and flavor!" },
  {"rating" => 4, "review" => "Stellar food and great service. Thank you :) I've ordered takeout from them numerous times and have been very pleased every time." },
  {"rating" => 5, "review" => "This place changed my life. " },

  {"rating" => 1, "review" => "Found a fingernail in my food. The one star is for the waitress who seemed more traumatized than we were." },
  {"rating" => 2, "review" => "I ate here three hours ago and now have diarrhea." },
  {"rating" => 3, "review" => "The food is decent but nothing super special." },
  {"rating" => 4, "review" => "Almost better than Taco Bell." },
  {"rating" => 5, "review" => "Their food definitely hit the spot, and I'd come back again to try other dishes.  They keep busy, so go early and beware of the line.  Definitely a unique restaurant with a fun fusion twist on what they serve." },

  {"rating" => 1, "review" => "Highlight of the meal was a bus boy smuggling us two cheese sticks from the bar as we waited close to an hour between courses.The cheese sticks were delish." },
  {"rating" => 2, "review" => "Wasn't much of a fan of the food. It's greasy and heavy and super spicy, and most of the flavors seem to be the same." },
  {"rating" => 3, "review" => "Come here for big portions and good overall value but don't expect food that is super amazing. Definitely a solid 3 stars." },
  {"rating" => 4, "review" => "Spent my cheat day here, and it was worth it." },
  {"rating" => 5, "review" => "Come early to grab seats! Great service! The workers were very attentive." }
]

url_array = ["LxC1Qx1qulc", "M-fA89yvx2I", "X7BbP1YJhx0", "5LBIuI7c_ps", "pLKgCsBOiw4", "UcYoEO5nSNE",
  "PSzZSuQsoNU", "KYBzqPuif5w", "iRguZkRTQyA", "FHEH2jQgLVk", "l5I9L6hu64A", "NbXjZomyNEM", "gw78G_i7GYo",
  "Y8iaxOGqlLc", "mCTatdD2fmk", "Cf_Df-Zl8iw", "qIPRTMulc-g", "xKSRpUH0VZo", "jivmv9hE6bM", "N_Y88TWmGwA",
  "D1_7Jz5cFTs", "TO69trRWlrI", "fGYeKt1E6hc", "q0ZvNn8SXy0", "wiyl0_FGGKo", "auIbTAcSH6E", "MjMLAst5pUI",
  "dMFIBmDYaIQ", "UU8sNutRppQ", "jpkfc5_d-DI", "bLV15ZhR-YU", "Yr4n8O_3UPc", "dfItZYL3qI0", "PLmojiLHdJU",
  "rITQq_QlOIc", "FlmXvqlD-nI", "qpf2glK0bAA", "ztgcyQILXsM", "Dq5g1u1eg1Q", "Pt_YmiYm7a4", "wiTWDYLURr8"]

times_array = [1,2,3,4,5,6,7]

Business.all.each do |business|
  num = times_array.sample
  num.times do |i|
    user = user_array.sample
    rating_review = review_array.sample
    url1 = url_array.sample
    url2 = url_array.sample
    review = Review.create!(business_id: business.id, user_id: user.id, review_text: rating_review["review"], rating: rating_review["rating"])
    Photo.create!(user_id: user.id, business_id: business.id, review_id: review.id, url: "https://source.unsplash.com/#{url1}")
    Photo.create!(user_id: user.id, business_id: business.id, review_id: review.id, url: "https://source.unsplash.com/#{url2}")
  end
end
