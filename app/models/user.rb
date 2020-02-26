class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  recommends :movies
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

end
