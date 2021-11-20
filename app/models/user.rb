class User < ApplicationRecord
  # ASPIRE
  # validations
  # associations

  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, :session_token, presence: true
  validates :password, presence: true, length: { minimum: 6, allow_nil: true }

  has_many :reviews

  has_many :orders

  has_one :cart

  after_initialization :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && is_valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCRypt::Password.new(self.password_digest).is_password?(password)
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
