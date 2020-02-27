require "open-uri"
class MoviesController < ApplicationController
  def index
  end

  def show
    omdb_id = params[:omdb_id]
    url     = "http://www.omdbapi.com/?i=#{omdb_id}&apikey=adf1f2d7"
    @movie  = JSON.parse(open(url).read)
  end
end
