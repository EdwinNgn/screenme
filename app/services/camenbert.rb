class Camenbert
  def self.start
    user = User.find(60)
    count = Hash.new 0
    movies_genres = user.likes.map { |movie| movie.get_details['Genre']}
    movies_genres.each do |movie_genres|
      movie_genres.split(',').each do |genre|
        count[genre] += 1
      end
    end
    p count
  end
end

