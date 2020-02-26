# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"
require 'faker'


csv_options = {headers: :first_row}

# 50.times {User.create(email: Faker::Internet.email, password: "azerty")}

# movies_id = []
# CSV.foreach("/Users/edwinnguyen/code/EdwinNgn/screenme/db/interactions_screenme.csv", csv_options) do |row|
#   movies_id << row[3].to_i
# end
# unique_ids = movies_id.uniq

# unique_ids.each do |id|
#   movie = Movie.new(tmdb_id: id)
#   movie.save
# end

CSV.foreach("/Users/edwinnguyen/code/EdwinNgn/screenme/db/interactions_screenme.csv", csv_options) do |row|
  interaction = Interaction.new(like: 1, tmdb_id: row[3])
  interaction.movie = Movie.find_by(tmdb_id: row[3])
  p Movie.find_by(tmdb_id: row[3])
  interaction.user = User.find(row[1])
  p User.find(row[1])
  interaction.save
end
