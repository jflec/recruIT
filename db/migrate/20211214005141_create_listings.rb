class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :description, null: false
      # t.string :user_id, null: false
      t.string :company, null: false
      t.string :company_image_url
      t.string :company_size
      t.integer :applicants
      t.string :education
      t.string :work_experience
      t.string :location, null: false
      t.string :position_type, null: false
      t.string :experience_level, null: false
      t.string :compensation 
      t.string :benefits, array: true, default: []
      t.string :skills, array: true, default: [], null: false

      t.timestamps
    end
  end
end
