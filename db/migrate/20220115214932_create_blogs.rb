class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :author
      t.string :title
      t.string :posts

      t.timestamps
    end
  end
end
