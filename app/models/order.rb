# == Schema Information
#
# Table name: orders
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :integer          not null
#  product_id :integer          not null
#
# Indexes
#
#  index_orders_on_cart_id  (cart_id)
#
class Order < ApplicationRecord

  validates :cart_id, :product_id, presence: true

  belongs_to :cart,
    foreign_key: :cart_id.
    class_name: :Cart
end
