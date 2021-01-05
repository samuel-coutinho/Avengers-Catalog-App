# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_04_035857) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "avengers", force: :cascade do |t|
    t.string "hero_name", null: false
    t.string "real_name", null: false
    t.string "status"
    t.integer "age"
    t.text "description"
    t.string "image", default: "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2019/05/avengers-project-800x400.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
