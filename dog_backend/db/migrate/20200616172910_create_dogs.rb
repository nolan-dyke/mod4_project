class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :external_link
      t.boolean :goodwithdogs
      t.boolean :goodwithcats
      t.boolean :goodwithkids
      t.integer :energy
      t.string :image

      t.timestamps
    end
  end
end
