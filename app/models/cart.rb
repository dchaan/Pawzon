# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_carts_on_product_id  (product_id)
#  index_carts_on_user_id     (user_id)
#
class Cart < ApplicationRecord

  validates :user_id, :product_id, :quantity, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

end
