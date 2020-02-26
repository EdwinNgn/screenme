class AddOmdbIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :omdb_id, :integer
  end
end
