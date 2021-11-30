class Api::OrdersController < ApplicationController
  before_action :require_logged_in

  def index
    @orders = Order.all
    render :index
  end

  def show
    @order = Order.find(params[:id])
    render :show
  end

  def create
    @order = Order.new(order_params)
    if @cart.save
      render :show
    else
      render json: ["Cannot add product to cart"], status: 422
    end
  end

  def update
    @order = Order.find(params[:id])
    if @order.update
      render :show
    else
      render json: ["Cannot update cart"], status: 422
    end
  end

  def destroy
    @order = Order.find_by(id: params[:id])
    if @order.destroy
      render :show
    else
      render json: ["Cannot delete cart"], status: 422
    end
  end

  private
  
  def orders_params
    params.require(:orders).permit(:quantity, :cart_id, :product_id)
  end
end
