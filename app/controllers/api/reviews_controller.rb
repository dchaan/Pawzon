class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: ["Cannot create review"], status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: ["Cannot update review"], status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review && @review.destroy
      render :show
    else
      render json: ["Cannot delete review"], status: 422
    end
  end

  private
  
  def review_params
    params.require(:review).permit(:title, :body, :rating, :user_id, :product_id)
  end

end
