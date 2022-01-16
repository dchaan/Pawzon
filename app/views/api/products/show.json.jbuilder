json.extract! @product, :id, :product_name, :description, :price, :category, :category_id, :rating, :image_url
if @product.photo.attached? 
  json.photoUrl url_for(@product.photo)
end