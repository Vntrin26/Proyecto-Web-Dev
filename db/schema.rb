# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_29_220001) do

  create_table "budgets", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_budgets_on_user_id"
  end

  create_table "expenses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "category"
    t.float "money"
    t.text "description"
    t.bigint "budget_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["budget_id"], name: "index_expenses_on_budget_id"
  end

  create_table "incomes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "category"
    t.float "money"
    t.text "description"
    t.bigint "budget_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["budget_id"], name: "index_incomes_on_budget_id"
  end

  create_table "investments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "category"
    t.float "amount"
    t.float "return_of_investment"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_investments_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "gold_status", limit: 1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "budgets", "users"
  add_foreign_key "expenses", "budgets"
  add_foreign_key "incomes", "budgets"
  add_foreign_key "investments", "users"
end
