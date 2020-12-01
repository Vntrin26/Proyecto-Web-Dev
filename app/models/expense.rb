class Expense < ApplicationRecord
  belongs_to :budget
  validates :category, presence: true
  validates :description, presence: true
  validates :money, presence: true
  validates :budget_id, presence: true
end
