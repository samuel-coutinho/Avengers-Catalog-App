class CreateAvengers < ActiveRecord::Migration[5.2]
  def change
    create_table :avengers do |t|
      t.string :hero_name, null: false
      t.string :real_name, null: false
      t.string :status
      t.integer :age
      t.text :description
      t.string :image, default: 'https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2019/05/avengers-project-800x400.png'

      t.timestamps
    end
  end
end
