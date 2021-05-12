class Community < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { minimum: 2 }

  validates :text, presence: true

  belongs_to :user
end
