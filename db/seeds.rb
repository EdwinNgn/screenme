# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"
require 'faker'

csv_file   = File.join(__dir__, 'likes_dislikes_screenme.csv')
csv_options = {headers: :first_row}


50.times {User.create(email: Faker::Internet.email, password: "azerty")}

movies_id = []
CSV.foreach(csv_file, csv_options) do |row|
  movies_id << [row[3].to_i, row[4].to_i]
end
unique_ids = movies_id.uniq

unique_ids.each do |ids|
  movie = Movie.new(tmdb_id: ids[0], omdb_id: ids[1])
  movie.save
end

CSV.foreach(csv_file, csv_options) do |row|
  p movie = Movie.find_by(tmdb_id: row[3])
  p user = User.find(row[1])
  if row[2] == "like"
    p user.like(movie)
  else
    p user.dislike(movie)
  end
end

User.create(email:"rose.moulan@gmail.com", password:"azerty", admin: true)
User.create(email:"paul.chapeau@edhec.com", password:"azerty", admin: true)
User.create(email:"tom.cizerom@edhec.com", password:"azerty", admin: true)
User.create(email:"edwin.nguyen@edhec.com", password:"azerty", admin: true)
