class MoviesController < ApplicationController
  def index
  end

  def show
    omdb_id = params[:omdb_id].delete('t')
    @movie = Movie.find_by(omdb_id: omdb_id)
  end
end
