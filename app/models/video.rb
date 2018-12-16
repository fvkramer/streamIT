class Video < ApplicationRecord
  validates :title, presence: true, uniqueness: true
 
  has_one_attached :video
  has_many :likes 
  has_many :views
  has_many :comments
end
