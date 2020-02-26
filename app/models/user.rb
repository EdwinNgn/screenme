class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  recommends :interactions
  # has_and_belongs_to_many :movies
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

end
