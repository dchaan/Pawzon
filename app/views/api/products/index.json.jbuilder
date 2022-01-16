@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :description, :price, :category, :category_id, :rating, :image_url
    json.photoUrl url_for(product.photo)
  end
end