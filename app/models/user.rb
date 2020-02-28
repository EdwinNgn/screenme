class User < ApplicationRecord
  recommends :movies
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_one_attached :avatar
  has_one_attached :coverpicture

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

end
