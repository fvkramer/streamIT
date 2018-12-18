class Video < ApplicationRecord
  validates :title, presence: true, uniqueness: true
 
  belongs_to :user,
    foreign_key: :channel_id
    
  has_one_attached :video
  has_one_attached :preview_image
  has_many :likes 
  has_many :views
  has_many :comments
end
