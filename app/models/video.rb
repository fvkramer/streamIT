require 'pg'

def execute(sql)
  conn = PG::Connection.open(:dbname => 'youtube_development')
  query_result = conn.exec(sql).values
  conn.close

  query_result
end

class Video < ApplicationRecord
  validates :title, presence: true, uniqueness: true
 
  has_one_attached :video
  has_many :likes 
  has_many :views
  has_many :comments


  def self.get_views
    execute(<<-SQL)
    SELECT
      title, COUNT(*) AS view_counts
    FROM
      videos
    JOIN
      views ON videos.id = views.video_id
    GROUP BY
      title
    ORDER BY
      view_counts DESC
    LIMIT
      10
  SQL
  end
end
