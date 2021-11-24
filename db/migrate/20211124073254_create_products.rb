class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.string :category
      t.integer :category_id
      t.float :rating, null: false
      t.text :image_url

      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :category_id
  end
end
