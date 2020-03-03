class ProfilesController < ApplicationController
  def show
    @user = User.find(params[:id])
    if @user == current_user
      @movies = @user.recommended_movies
    else
      @movies = @user.recommended_movies & current_user.recommended_movies
    end
    @movies = Movie.top(10) if @movies.blank?
    @movie_details = @movies.map { |movie| movie.get_details }



    movies_rated = @user.liked_movies_count + @user.disliked_movies_count
    # @percentage = 0

    if movies_rated < 10
      @percentage = (( movies_rated / 10.to_f ) * 100).to_i
      @color = "white"
      @movies_left = 10 - movies_rated
    elsif movies_rated < 50
      @percentage = (( (movies_rated - 10) / 50.to_f ) * 100).to_i
      @color = "bronze"
      @movies_left = 50 - movies_rated
    elsif movies_rated < 100
      @percentage = (( (movies_rated - 50) / 100.to_f ) * 100).to_i
      @color = "silver"
      @movies_left = 100 - movies_rated
    else
      @percentage = 100
      @color = "gold"
      @movies_left = "You're a gold member"
    end

  end
end
