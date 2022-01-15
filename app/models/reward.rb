class Reward < ApplicationRecord
  belongs_to :user
  validates :desc, :points, presence: true 
end
