require "open-uri"
class MoviesController < ApplicationController
  def index
  end

  def show
    omdb_id = params[:omdb_id]
    url     = "http://www.omdbapi.com/?i=#{omdb_id}&apikey=adf1f2d7"
    @movie  = JSON.parse(open(url).read)

    @user = current_user
    similar_user = @user.similar_raters #get the similar audiences to the user
    audiences = Movie.find_by(omdb_id: omdb_id.delete('t')).liked_by #get the audience that likes this movies
    # if possible, get only people that appears in the similar audiences of the user and that
    # already watch the movie. If not, just take the audiences that already watches the movies.
    audiences = audiences & similar_user if !((audiences & similar_user).blank?)
    #audiences = similar_user if audiences.blank?
    #audiences << @user # add the user to the total audiences.

    # movies_similar_all = []
    counts = Hash.new 0
    # create an array with all the movies recommandation
    audiences.each do |audience|
      audience.recommended_movies.each do |recommandation|
        counts[recommandation] += 1
      end
    end

    # get the three first movie.
    # nb : if several movies appears the same number of times, we choose randomly on of this.
    @recommandations = []
    while @recommandations.size < 3 && !counts.blank? do
      movie_with_max_occurence = counts.max_by{|k,v| v}
      if @user.rated?(movie_with_max_occurence[0])
        counts.delete(movie_with_max_occurence[0])
      else
        @recommandations << movie_with_max_occurence[0]
        counts.delete(movie_with_max_occurence[0])
      end
    end
    @recommandations
  end
end
