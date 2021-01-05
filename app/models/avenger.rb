class Avenger < ApplicationRecord
    validates :hero_name, presence: true
    validates :real_name, presence: true
end
