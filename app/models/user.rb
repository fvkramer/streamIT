class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  # add email validation
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :videos,
    foreign_key: :channel_id
  has_many :subscribers

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

   def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end