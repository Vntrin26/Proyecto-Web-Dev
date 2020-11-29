class CreateInvestments < ActiveRecord::Migration[6.0]
  def change
    create_table :investments do |t|
      t.string :category
      t.float :amount
      t.float :return_of_investment
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
