class ProfilesController < ApplicationController
  def show
    @user = User.find(params[:id])
    if @user == current_user
      @movies = @user.recommended_movies.to_a
    else
      @movies = @user.recommended_movies.to_a & current_user.recommended_movies.to_a
    end
    Movie.top(10).each do |movie|
      break if @movies.size == 10
      next if  @movies.include?(movie)
      @movies << movie
    end
    @movie_details = @movies.map { |movie| movie.get_details }
  end
end
