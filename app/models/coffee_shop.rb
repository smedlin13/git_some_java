class CoffeeShop < ApplicationRecord
  validates :drinks, :food, :price, :image, presence: true 
end
