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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
