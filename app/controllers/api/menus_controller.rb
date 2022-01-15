class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy]

  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      render json: @menu
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @menu.destroy
    render json: { message: "menu deleted" }
  end

  private 

    def menu_params
      params.require(:menu).permit(:drinks, :food, :image, :price)
    end

    def set_menu
      @menu = Menu.find(params[:id])
    end
end
