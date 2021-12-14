class ListingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :company, :location, :skills, :work_experience, :experience_level, :position_type
end
