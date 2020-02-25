class Movie < ApplicationRecord
  include SimpleRecommender::Recommendable
  has_many :interactions
  has_many :users, through: :interactions

  similar_by :users
end
