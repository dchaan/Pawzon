# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  category     :string
#  description  :text             not null
#  image_url    :text
#  price        :decimal(, )      not null
#  product_name :string           not null
#  rating       :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  category_id  :integer
#
# Indexes
#
#  index_products_on_category_id   (category_id)
#  index_products_on_product_name  (product_name)
#
class Product < ApplicationRecord
  validates :product_name, :description, :price, :rating, presence: true

  has_one_attached :photo

  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

  has_many :cart_items


  belongs_to :cart,
    foreign_key: :product_id,
    class_name: :Cart,
    optional: true
end
