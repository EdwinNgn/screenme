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

    respond_to do |format|
      format.html { redirect_to step_one_path }
      format.js
    end
  end

end
