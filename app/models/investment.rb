class Investment < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true
  validates :category, presence: true
  validates :amount, presence: true
  validates :return_of_investment, presence: true
end
