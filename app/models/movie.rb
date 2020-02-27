require "open-uri"
class Movie < ApplicationRecord
  def get_details
    id = "0"*(7 - self.omdb_id.to_s.length) + self.omdb_id.to_s
    url = "http://www.omdbapi.com/?i=tt#{id}&apikey=adf1f2d7"
    movie = JSON.parse(open(url).read)
  end
end
