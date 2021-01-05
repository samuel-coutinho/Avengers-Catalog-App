# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Avenger.create(
    hero_name: "Ironman",
    real_name: "Tony Stark",
    status: "Active",
    age: 42,    
)

 Avenger.create(
    hero_name: "Scarlet Witch",
    real_name: "Wanda Django Maximoff",
    status: "Active",
    age: 20,    
)