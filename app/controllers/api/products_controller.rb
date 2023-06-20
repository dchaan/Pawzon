class Api::ProductsController < ApplicationController
  def index
    @products = query.empty? ? Product.search(query.downcase) : Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def query
    params[:query]
  end

end
