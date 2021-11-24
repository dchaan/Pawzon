class User < ApplicationRecord
  # ASPIRE
  # validations
  # associations
  attr_reader :password

  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :reviews
  has_many :orders
  has_one :cart

  after_initialize :ensure_session_token
  

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end
