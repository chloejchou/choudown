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
- `POST /api/businesses`
- `GET /api/businesses/:id`
- `PATCH /api/businesses/:id`
- `DELETE /api/businesses/:id`

### Reviews

- `GET /api/reviews`
- `POST /api/businesses/:business_id/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/businesses/:business_id/reviews`
  - index of all reviews for a business

### Photos

- `GET /api/photos`
- `POST /api/businesses/:business_id/photos`
- `GET /api/photos/:id`
- `DELETE /api/photos/:id`
- `GET /api/businesses/:id/photos`
  - index of all photos for a business
- `GET /api/reviews/:id/photos`
  - index of all photos for a review

### Tags

- `GET /api/tags`
- `POST /api/businesses/:business_id/tags`
- `DELETE /api/businesses/:business_id/tags/:id`
- `GET /api/businesses/:business_id/tags`
  - index of all tags for a business
