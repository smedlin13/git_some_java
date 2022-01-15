class CreateCoffeeShops < ActiveRecord::Migration[6.1]
  def change
    create_table :coffee_shops do |t|
      t.string :drinks
      t.string :food
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
