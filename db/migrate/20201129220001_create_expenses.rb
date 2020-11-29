class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :category
      t.float :money
      t.text :description
      t.references :budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
