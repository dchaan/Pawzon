class Api::CartsController < ApplicationController
  
  before_action :require_logged_in

  def index
    @carts = Cart.where(user_id: current_user.id)
    render :show
  end

  def show
    @cart = Cart.find_by(id: params[:id)
    render :show
  end

  def create
    cart_params[:user_id] != "" ? @cart = Cart.new(cart_params) : @cart = Cart.new()
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    if @cart && @cart.update(cart_params)
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart = Cart.find_by(id: params[:id])
    @cart.destroy
    render :show
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id, :product_id, :quantity)
  end
end
