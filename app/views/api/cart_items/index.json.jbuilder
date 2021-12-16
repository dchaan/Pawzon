@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item, :id, :user_id, :product_id, :quantity
    json.extract! cart_item.product, :product_name, :image_url, :price
  end
end