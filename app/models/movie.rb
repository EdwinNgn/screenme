class Movie < ApplicationRecord
  has_many :interactions
  has_many :users, through: :interactions

  include SimpleRecommender::Recommendable
  similar_by :users
end
