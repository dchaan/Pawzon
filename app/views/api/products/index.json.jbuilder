@products.each do |product|
  json.set! product.id do
    json.partial! product, 
      :id, 
      :product_name, 
      :description, 
      :price, 
      :category, 
      :category_id, 
      :rating
  end
end