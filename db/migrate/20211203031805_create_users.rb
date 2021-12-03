class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :about
      t.string :password_digest
      t.string :session_token
      t.string :profile_image_url
      t.string :banner_image_url
      t.string :skills, array: true, default: []
      t.string :education, array: true, default: []
      t.string :work_experience, array: true, default: []

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
