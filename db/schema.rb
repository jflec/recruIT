# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_14_005141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.string "recruiter_id", null: false
    t.string "company", null: false
    t.string "company_image_url"
    t.string "company_size"
    t.integer "applicants"
    t.string "education"
    t.string "work_experience"
    t.string "location", null: false
    t.string "position_type", null: false
    t.string "experience_level", null: false
    t.string "compensation"
    t.string "benefits", default: [], array: true
    t.string "skills", default: [], null: false, array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "about"
    t.string "password_digest"
    t.string "session_token"
    t.string "profile_image_url"
    t.string "banner_image_url"
    t.string "skills", default: [], array: true
    t.string "education", default: [], array: true
    t.string "work_experience", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
