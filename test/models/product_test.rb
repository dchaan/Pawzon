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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
