require "open-uri"
class Movie < ApplicationRecord
  def get_details
    url = "http://www.omdbapi.com/?i=#{self.tt_id}&apikey=adf1f2d7"
    JSON.parse(open(url).read)
  end

  def tt_id
    "tt" + "0"*(7 - self.omdb_id.to_s.length) + self.omdb_id.to_s
  end

end
