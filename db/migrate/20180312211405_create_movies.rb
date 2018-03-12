class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :producer
      t.string :genre

      t.timestamps
    end
  end
end
