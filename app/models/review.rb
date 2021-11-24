# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text
#  rating      :integer          not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  product_id  :integer
#  reviewer_id :integer          not null
#
# Indexes
#
#  index_reviews_on_product_id   (product_id) UNIQUE
#  index_reviews_on_reviewer_id  (reviewer_id) UNIQUE
#
class Review < ApplicationRecord

  validates :product_id, :reviewer_id, :rating, presence: true

  belongs_to :user,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
  
end
