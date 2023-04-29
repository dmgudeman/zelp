# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"
ApplicationRecord.transaction do 



    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
      end
      puts "Creating businesses..."
    Business.create!(
      name: 'Bubbas Shrimp',
      address: '1234 Main Street AnyTown, USA 99999',
      phone: '555-555-5555',
      email: 'bs@bs.com',
      website: 'www.bs.com',
      cost: '$',
      lat: 40.00,
      lng: 40.00
    )
    Business.create!(
       name: 'Sprouts',
       address: '301 Gellert Blvd Daly City, CA 94015',
       phone: '415321091',
       website: 'https://www.sprouts.com',
       cost: '$$',
       lat: '37.66900254389973', 
       lng: '-122.46650888579883',

    )
    


    10.times do 
      Business.create!({
        name: Faker::Company.name,
        address: Faker::Address.street_address,
        phone: Faker::PhoneNumber.phone_number,
        email: Faker::Internet.email,
        website: Faker::Internet.url(host: 'example.com'),
        cost: '$',
        lat: Faker::Address.latitude.to_f.round(6),
        lng: Faker::Address.longitude.to_f.round(6),
        # photos:[]
       
      }) 
    
    end
    puts "Creating reviews"
    8.times do 
      Review.create(
        author_id: User.all.sample,
        business_id: Business.all.sample,
        rating: Faker::Number.between(from: 1, to: 5),
        body: Faker::Lorem.paragraph
      )
    end
   
    puts "Done!"
  end
  

  sprout = Business.find_by('name': 'Sprouts');

    
    sprout.images.attach( io: URI.open('https://zelp99-dev.s3.us-west-1.amazonaws.com/sprouts_01.jpeg'), filename: "sprouts_01.jpeg")
    # sprout.photo.attach( io: URI.open('https://zelp99-dev.s3.us-west-1.amazonaws.com/sprouts_02.jpeg'), filename: "sprouts_02.jpeg")
    # sprout.photo.attach( io: URI.open('https://zelp99-dev.s3.us-west-1.amazonaws.com/sprouts_03.jpeg'), filename: "sprouts_03.jpeg")
    # sprout.photo.attach( io: URI.open('https://zelp99-dev.s3.us-west-1.amazonaws.com/sprouts_04.jpeg'), filename: "sprouts_04.jpeg")
    # sprout.photo.attach( io: URI.open('https://zelp99-dev.s3.us-west-1.amazonaws.com/sprouts_05.jpeg'), filename: "sprouts_05.jpeg")
