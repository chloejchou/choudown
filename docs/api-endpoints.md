# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Businesses

- `GET /api/businesses`
  - will accept a query string
- `GET /api/businesses/:id`
- `GET /api/businesses/featured/:id`

### Reviews

- `GET /api/businesses/:business_id/reviews`
  - index of all reviews for a business
- `POST /api/businesses/:business_id/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/users/:user_id/reviews`
  - index of all reviews for a user

### Bookmarks

- `GET /api/users/:user_id/bookmarks`
  - index of all reviews for a user
