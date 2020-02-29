class User < ApplicationRecord
  recommends :movies
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_one_attached :avatar
  has_one_attached :coverpicture

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships
  has_many :friends, :through => :friendships

  def follow?(user)
    self.friends.include?(user)
  end
end
