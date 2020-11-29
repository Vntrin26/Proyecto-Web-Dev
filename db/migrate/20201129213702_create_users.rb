class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email, case_sensitive: true
      t.string :password_digest
      t.integer :gold_status, :limit => 1

      t.timestamps
    end
  end
end
