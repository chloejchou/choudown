class CreateTables < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.string :website_url
      t.timestamps
    end

    add_index :businesses, :user_id

    create_table :reviews do |t|
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      t.text :review_text, null: false
      t.integer :rating, null: false
      t.timestamps
    end

    add_index :reviews, :business_id
    add_index :reviews, :user_id

    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :review_id
      t.string :url, null: false
      t.string :caption
      t.timestamps
    end

    add_index :photos, :user_id
    add_index :photos, :business_id
    add_index :photos, :review_id

    create_table :tags do |t|
      t.string :name, null: false
      t.timestamps
    end

    create_table :taggings do |t|
      t.integer :business_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :taggings, :business_id
    add_index :taggings, :tag_id
  end
end
