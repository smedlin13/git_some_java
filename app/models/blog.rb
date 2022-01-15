class Blog < ApplicationRecord
  validates :title, :author, :posts, presence: true 

end
