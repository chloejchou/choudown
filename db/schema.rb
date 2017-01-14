# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170114162152) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.string   "name",           null: false
    t.string   "street_address", null: false
    t.string   "city",           null: false
    t.string   "state",          null: false
    t.string   "zip",            null: false
    t.string   "price",          null: false
    t.string   "image_url",      null: false
    t.string   "website_url",    null: false
    t.float    "lat",            null: false
    t.float    "long",           null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "businesses", ["user_id"], name: "index_businesses_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "business_id", null: false
    t.integer  "review_id"
    t.string   "url",         null: false
    t.string   "caption"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "photos", ["business_id"], name: "index_photos_on_business_id", using: :btree
  add_index "photos", ["review_id"], name: "index_photos_on_review_id", using: :btree
  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "user_id",     null: false
    t.text     "review_text", null: false
    t.integer  "rating",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["business_id"], name: "index_reviews_on_business_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "tag_id",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "taggings", ["business_id"], name: "index_taggings_on_business_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tags", ["name"], name: "index_tags_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
