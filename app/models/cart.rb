# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_carts_on_user_id  (user_id)
#
class Cart < ApplicationRecord

  validates :user_id, presence: true

  has_many :orders,
    foreign_key: :cart_id,
    class_name: :Order
end
