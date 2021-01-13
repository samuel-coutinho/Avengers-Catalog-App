# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Avenger.create(
    hero_name: "Ironman",
    real_name: "Antony Edward "Tony" Stark",
    status: "Active",
    age: 48, 
    description: "Wounded, captured and forced to build a weapon by his enemies,
                  billionaire industrialist Tony Stark instead created an advanced suit
                  of armor to save his life and escape captivity.
                  Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
    image: "https://cdn.mos.cms.futurecdn.net/ytDTW3FMV5SswTnR5aYDgP.jpg"  
)
Avenger.create(
    hero_name: "Captain America",
    real_name: "Steven Rogers",
    status: "Withdrawn",
    age: 93,
    description:"Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
    image: "https://www.comingsoon.net/assets/uploads/2015/01/captainamericaheader.jpg"     
)
Avenger.create(
    hero_name: "Iron Man",
    real_name: "Antony Edward Stark",
    status: "Active",
    age: 48,
    description:"Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
    image: "https://cdn.mos.cms.futurecdn.net/ytDTW3FMV5SswTnR5aYDgP.jpg"     
)
Avenger.create(
    hero_name: "The Incredible Hulk",
    real_name: "Robert Bruce Banner",
    status: "Active",
    age: 49,
    description:"Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
    image: "https://2.bp.blogspot.com/-YCYMTGc2Mc4/VMu_B39cE8I/AAAAAAAAP6w/sjIOeSiWVlg/s1600/the%2Bincredible%2Bhulk%2B1.jpg"     
)