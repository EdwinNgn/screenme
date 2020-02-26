class CreateInteractions < ActiveRecord::Migration[5.2]
  def change
    create_table :interactions do |t|
      t.references :user, foreign_key: true
      t.integer :"1"
      t.integer :tmdb_id

      t.timestamps
    end
  end
end
