```js

{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: []
  },
  businesses: {
    1: {
      id: 1,
      name: "Tartine",
      street_address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zip: "99999",
      lat: 37.7879217,
      long -122.4409499,
      price: "$$",
      image_url: "example.com/xyz",
      website_url: "tartinebakery.com",
      tags: ["bakery", "french"]
    }
  },
  errors: [],
  reviews: [
    {
      business_id: 1,
      user: {
        username: "lord_of_the_fries",
        id: 6
      },
      review_text: "Come here for big portions and...",
      rating: 4,
      photos: [
        {
          id: 5
          url: "example.com/xyz",
          caption: "yum"
        }
      ]
    }
  ]
}

```
