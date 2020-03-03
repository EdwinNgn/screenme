class ProfilesController < ApplicationController
  def show
    @user = User.find(params[:id])
    if @user == current_user
      @movies_details = @user.recommended_movies.map { |movie| movie.get_details }
    else
      @movies_details = (@user.recommended_movies & current_user.recommended_movies).map { |movie| movie.get_details }
    end
    @movies_details = Movie.top(10).map { |movie| movie.get_details } if @movie_details.blank?
  end
end
