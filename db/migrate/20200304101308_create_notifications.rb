class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.boolean    :read, default: false
      t.string     :category
      t.references :sender, foreign_key: {to_table: :users}
      t.references :receiver, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
