class MovieLike
  def self.start
    user = User.find(39)
    similar_user = user.similar_raters #get the similar audiences to the user
    movie = Movie.find(909)
    audiences = movie.liked_by #get the audience that likes this movies
    # if possible, get only people that appears in the similar audiences of the user and that
    # already watch the movie. If not, just take the audiences that already watches the movies.
    audiences = audiences & similar_user if !(audiences & similar_user).blank?
    audiences = similar_user if audiences.blank?
    audiences << user # add the user to the total audiences.

    # movies_similar_all = []
    counts = Hash.new 0
    # create an array with all the movies recommandation
    audiences.each do |audience|
      audience.recommended_movies.each do |recommandation|
        counts[recommandation] += 1
      end
    end

     # determine which movies appears the most
    # counts = Hash.new 0
    # movies_similar_all.each do |movie_similar|
    #   counts[movie_similar] += 1
    # end
    # p counts

    # get the three first movie.
    # nb : if several movies appears the same number of times, we choose randomly on of this.
    recommandation = []
    while recommandation.size < 3 do
      movie_with_max_occurence = counts.max_by{|k,v| v}
      if user.rated?(movie_with_max_occurence[0])
        counts.delete(movie_with_max_occurence[0])
      else
        recommandation << movie_with_max_occurence[0]
        counts.delete(movie_with_max_occurence[0])
      end
    end
    p recommandation
    # 3.times do |i|
    #   movie_with_max_occurence = counts.max_by{|k,v| v}
    #   p movie_with_max_occurence
    #   counts.delete(movie_with_max_occurence[0])
    # end

  end
end
