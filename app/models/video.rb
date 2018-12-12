class Video < ApplicationRecord
  validates :title, presence: true
 
  has_many :likes 
end
