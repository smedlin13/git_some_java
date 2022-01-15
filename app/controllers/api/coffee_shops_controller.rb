class Api::CoffeeShopsController < ApplicationController
  before_action :set_coffee_shops, only: [:show, :update, :destroy]

  def index
    render json: Coffee_shops.all
  end

  def show
    render json: @coffee_shop
  end

  def create
    @coffee_shop = Coffee_shops.new(coffee_shop_params)
    if @coffee_shop.save
      render json: @coffee_shop
    else
      render json: { errors: @coffee_shop.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @coffee_shop.update(coffee_shop_params)
      render json: @coffee_shop
    else
      render json: { errors: @coffee_shop.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @coffee_shop.destroy
    render json: { message: "coffee_shop deleted" }
  end

  private 

    def coffee_shop_params
      params.require(:coffee_shop).permit(:drinks, :food, :image, :price)
    end

    def set_coffee_shop
      @coffee_shop = Coffee_shops.find(params[:id])
    end
end
