# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class Cart < ApplicationRecord
  validates :user_id, uniqueness: true
  
  has_many :orders,
    primary_key: :id,
    foreign_key: :cart_id,
    class_name: :Order
end
