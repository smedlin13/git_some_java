class Menu < ApplicationRecord
  validates :food, :drinks, :image, :price, presence: true 
end
