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
  end
end
