class ScrappingAmazon
  def self.start
    require 'open-uri'
    require 'nokogiri'

    id_heat = "tt0113277"
    id_avatar = "tt0499549"
    url1 = "https://www.imdb.com/title/#{id_heat}/?ref_=nv_sr_srsg_3"
    url2 = "https://www.imdb.com/title/#{id_avatar}/?ref_=nv_sr_srsg_3"
    root = "https://www.imdb.com/"

    p "========heat========="

    imdb_serialized1 = open(url1).read
    html_imdb1 = Nokogiri::HTML(imdb_serialized1)
    html_imdb1.search('.buybox__button').each do |element|
      puts root + element.attribute('href').value
    end

    p "========Avatar========="

    imdb_serialized2 = open(url2).read
    html_imdb2 = Nokogiri::HTML(imdb_serialized2)
    html_imdb2.search('.buybox__button').each do |element|
      puts root + element.attribute('href').value
    end
  end
end
