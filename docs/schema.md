# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## businesses
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
name           | string    | not null
street_address | string    | not null
city           | string    | not null
state          | string    | not null
zip            | string    | not null
price          | integer   | not null, inclusive [$, $$, $$$, $$$$]
image_url      | string    | not null
website_url    | string    |
lat            | float     | not null
long           | float     | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed
user_id     | integer   | not null, foreign key (references users), indexed
review_text | text      | not null
rating      | integer   | not null, inclusive [1, 2, 3, 4, 5]

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
review_id   | integer   | foreign key (references reviews), indexed
url         | string    | not null
caption     | string    |

## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
business_id | integer   | not null, foreign key (references businesses), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
