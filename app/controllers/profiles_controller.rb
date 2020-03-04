class ProfilesController < ApplicationController
  def show

    @click_on_friend = params[:friend]


    @user = User.find(params[:id])
    if @user == current_user
      @movies = @user.recommended_movies.to_a
    else
      @movies = @user.recommended_movies.first(3).to_a + (@user.recommended_movies.to_a & current_user.recommended_movies.to_a)
      @movies = @movies.uniq
    end
    Movie.top(100).each do |movie|
      break if @movies.size == 10
      next if  (@movies.include?(movie) || @user.rated?(movie))
      @movies << movie
    end
    @movie_details = @movies.map { |movie| movie.get_details }



    movies_rated = @user.liked_movies_count + @user.disliked_movies_count
    # @percentage = 0

    if movies_rated < 10
      @percentage = (( movies_rated / 10.to_f ) * 100).to_i
      @color = "white"
      @movies_left = 10 - movies_rated
      @next_level = "bronze member"
    elsif movies_rated < 50
      @percentage = (( (movies_rated - 10) / 50.to_f ) * 100).to_i
      @color = "bronze"
      @movies_left = 50 - movies_rated
      @next_level = "silver member"
    elsif movies_rated < 100
      @percentage = (( (movies_rated - 50) / 100.to_f ) * 100).to_i
      @color = "silver"
      @movies_left = 100 - movies_rated
      @next_level = "gold member"
    else
      @percentage = 100
      @color = "gold"
      @movies_left = "You're a gold member"
    end

  end
end
