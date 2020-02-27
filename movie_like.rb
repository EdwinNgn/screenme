user = User.second
movie = Movie.find(2535)
audiences = movie.liked_by
p audiences
movies_all = []
audiences.each do |audience|
  movies_all << audience.liked_movies
end

movies_unique = movies_all.uniq
p movies_unique
