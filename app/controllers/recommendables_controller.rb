class RecommendablesController < ApplicationController
  def like

    @tt_id = params[:imdbID]
    id = @tt_id.split('').drop(2).join.to_i

    movie = Movie.find_by(omdb_id: id)
    user = current_user
    if user.likes?(movie)
      user.unlike(movie)
    else
      user.like(movie)
    end
    puts "this is the movie id"
    p movie.id
    puts "this are the movies liked by the current user"
    p user.liked_movies



    respond_to do |format|
      format.html { redirect_to step_one_path }
      format.js
    end
  end

  def dislike

    tt_id = params[:imdbID]
    id = tt_id.split('').drop(2).join.to_i

    movie = Movie.find_by(omdb_id:id)
    user = current_user
    if user.dislikes?(movie)
      user.undislike(movie)
    else
      user.dislike(movie)
    end


    puts "this is the movie id"
    p movie.id
    puts "this are the movies disliked by the current user"
    p user.disliked_movies


    respond_to do |format|
      format.html { redirect_to step_one_path }
      format.js
    end
  end

  def save

    tt_id = params[:imdbID]
    id = tt_id.split('').drop(2).join.to_i

    movie = Movie.find_by(omdb_id:id)
    user = current_user
    if user.bookmarks?(movie)
      user.unbookmark(movie)
    else
      user.bookmark(movie)
    end


    puts "this is the movie id"
    p movie.id
    puts "this are the movies saved by the current user"
    p user.bookmarked_movies


    respond_to do |format|
      format.html { redirect_to step_one_path }
      format.js
    end
  end

  def blacklist

    tt_id = params[:imdbID]
    id = tt_id.split('').drop(2).join.to_i

    movie = Movie.find_by(omdb_id:id)
    user = current_user
    if user.hides?(movie)
      user.unhide(movie)
    else
      user.hide(movie)
    end


    puts "this is the movie id"
    p movie.id
    puts "this are the movies blacklisted by the current user"
    p user.hidden_movies


    respond_to do |format|
      format.html { redirect_to step_one_path }
      format.js
    end
  end

end
