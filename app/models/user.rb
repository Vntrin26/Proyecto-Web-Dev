class User < ApplicationRecord
    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email
    
    has_one :budget, dependent: :destroy
    has_many :investment, dependent: :destroy
end
