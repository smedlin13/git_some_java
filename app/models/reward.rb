class Reward < ApplicationRecord
  belongs_to :user
  validates :desc, :points, :prizes, :purchases, presence: true 
end
