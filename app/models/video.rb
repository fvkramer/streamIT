class Video < ApplicationRecord
  validates :title, presence: true, uniqueness: true
 
  has_many :likes 
end
