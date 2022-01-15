class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :drinks
      t.string :food
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
