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
      price: 1,
      image_url: "example.com/xyz",
      website_url: "tartinebakery.com",
      reviews: [
        {
          id: 1,
          user_id: 1,
          review_text: "best bread ever",
          rating: 5,
          photos: [
            {
              id: 1,
              url: "example.com/xyz"
            }
          ]
        }
      ],
      photos: [
        {
          id: 10,
          user_id: 5,
          url: "example.com/xyz",
          caption: "yum"
        }
      ],
      tags: ["bakery", "french"]
    }
  }
}

```
