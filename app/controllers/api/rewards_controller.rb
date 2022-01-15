class Api::RewardsController < ApplicationController
  before_action :set_reward, only: [:show, :update, :destroy]

  def index 
    render json: current_user.rewards
  end

  def show
    render json: @reward
  end

  def create 
    @reward = current_user.rewards.new(reward_params)
    if @reward.save
      render json: @reward
    else
      render json: { errors: @reward.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @reward.update(reward_params)
      render json: @reward
    else
      render json: { errors: @reward.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @reward.destroy
    render json: { message: "reward deleted" }
  end

  private
    def reward_params
      params.require(:reward).permit(:desc, :points)
    end

    def set_reward
      @reward = current_user.rewards.find(params[:id])
    end
end
