# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



listings = Listing.create!([
    {
        title: "Fullstack Software Engineer",
        description: "We are cool!",
        recruiter_id: "0",
        company: "Google",
        location: "Remote",
        position_type: "Fulltime",
        experience_level: "Senior",
        skills: ["React", "Redux", "Ruby"],
    },

    {
        title: "Frontend Software Engineer",
        description: "CSS not included!",
        recruiter_id: "1",
        company: "Cloudflare",
        location: "Hybrid",
        position_type: "Contract",
        experience_level: "Junior",
        skills: ["React", "CSS"],
    },
       ])