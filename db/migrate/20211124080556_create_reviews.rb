class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :body
      t.integer :rating, null: false
      t.integer :reviewer_id, null: false
      t.integer :product_id
      t.timestamps
    end
    add_index :reviews, :reviewer_id, unique: true
    add_index :reviews, :product_id, unique: true
  end
end
