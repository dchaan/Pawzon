# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_cart_items_on_user_id  (user_id)
#
class CartItem < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
