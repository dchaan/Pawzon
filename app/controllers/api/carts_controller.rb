class Api::CartsController < ApplicationController
  def show
    @cart = Cart.find_by(user_id: current_user.id)
    render :show
  end

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 401
    end
  end

  def update
    @cart = Cart.find(params[:id])
    if @cart.update(cart_params)
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
    params.require(:cart).permit(:user_id)
  end
end