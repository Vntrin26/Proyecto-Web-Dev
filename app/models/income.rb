class Income < ApplicationRecord
  belongs_to :budget
  validates :category, :description, :money, :created_at
end
