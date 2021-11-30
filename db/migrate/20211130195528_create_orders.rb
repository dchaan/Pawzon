class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :cart_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end

    add_index :orders, :cart_id
  end
end
