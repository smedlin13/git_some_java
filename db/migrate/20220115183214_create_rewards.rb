class CreateRewards < ActiveRecord::Migration[6.1]
  def change
    create_table :rewards do |t|
      t.string :desc
      t.string :purchases
      t.integer :points
      t.string :prizes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
