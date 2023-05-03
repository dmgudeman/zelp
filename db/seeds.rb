# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'
ApplicationRecord.transaction do
  puts 'Destroying tables...'
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Business.destroy_all
  puts 'Resetting primary keys...'
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('businesses')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')
  ApplicationRecord.connection.reset_pk_sequence!('tags')

  puts 'Creating users...'
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition',
    email: 'demo@user.io',
    password: 'password'
  )

  # More users
  # 10.times do
  #   User.create!({
  #     username: Faker::Internet.unique.username(specifier: 3),
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   })
  #   end
  #   puts "Creating businesses..."
  # Business.create!(
  #   name: 'Bubbas Shrimp',
  #   address: '1234 Main Street AnyTown, USA 99999',
  #   phone: '555-555-5555',
  #   email: 'bs@bs.com',
  #   website: 'www.bs.com',
  #   cost: '$',
  #   lat: 40.00,
  #   lng: 40.00
  # )
  puts 'Done with Users'
  puts 'Creating Businesses'

  def make_coord(str)
    coords = str.split(',').map(&:to_f)
    { lat: coords[0], lng: coords[1] }.to_json
  end

  Business.create!(
    name: 'Sprouts',
    address: '301 Gellert Blvd Daly City, CA 94015',
    phone: '(415) 325-1091',
    website: 'https://www.sprouts.com',
    cost: '$$',
    latlng: make_coord('37.66899405144818, -122.46662690296195'),
    hours: { "Mon": { "time": '7:00 AM - 10:00 PM' }, "Tue": { "time": '7:00 AM - 10:00 PM' },
             "Wed": { "time": '7:00 AM - 10:00 PM' }, "Thu": { "time": '7:00 AM - 10:00 PM' }, "Fri": { "time": '7:00 AM - 10:00 PM' }, "Sat": { "time": '7:00 AM - 10:00 PM' }, "Sun": { "time": '7:00 AM - 10:00 PM' } }
  )

  Business.create!(
    name: 'Safeway',
    address: '2020 Market St San Francisco, CA 94114',
    phone: '(415) 861-7660',
    website: 'http://safeway.com',
    cost: '$$',
    latlng: make_coord('37.726793002132965, -122.4762884452887'),
    hours: { "Mon": { "time": '6:00 AM - 9:00 PM' }, "Tue": { "time": '6:00 AM - 9:00 PM' }, "Wed": { "time": '6:00 AM - 9:00 PM' },
             "Thu": { "time": '6:00 AM - 9:00 PM' }, "Fri": { "time": '6:00 AM - 9:00 PM' }, "Sat": { "time": '6:00 AM - 9:00 PM' }, "Sun": { "time": '6:00 AM - 9:00 PM' } }
  )

  # lat: '37.76900125791264',
  # lng: '-122.4279027620785'
  # )
  # Business.create!(
  #   name: 'Lucky',
  #   address: '1515 Sloat Blvd San Francisco, CA 94132',
  #   phone: '4156814300',
  #   website: 'https://www.yelp.com/biz_redir?url=https%3A%2F%2Fluckysupermarkets.com&cachebuster=1682870824&website_link_type=website&src_bizid=t2BIu94PpNJqzxKw18c4VQ&s=7670519fdc03d9e0f47aaf45fc5766ecb8ac2ff17256777c2124c783db5419fa',
  #   cost: '$$',
  #   lat: '37.73330576338074',
  #   lng: '-122.48960835881019'
  # )

  # Business.create!(
  #   name: 'Nijiya Market',
  #   address: '1737 Post St San Francisco, CA 94115',
  #   phone: '4155631901',
  #   website: 'https://www.yelp.com/biz_redir?url=http%3A%2F%2Fwww.nijiya.com&cachebuster=1682871302&website_link_type=website&src_bizid=3-QftDg5y7rqLfCVt_Ja-g&s=1687d1d6ea880d6ea99ab048c9baeeac95f97508e1e2ea8e633175643007d8b6',
  #   cost: '$$',
  #   lat: '37.78539647974665',
  #   lng: '-122.43114328949343'
  # )

  Business.create!(
    name: 'Trader Joe\'s',
    address: '3 Masonic Ave San Francisco, CA 94118',
    phone: '(415) 346-9964',
    website: 'http://www.traderjoes.com',
    cost: '$$',
    latlng: make_coord('37.72695423288699, -122.47623480111044'),
    hours: { "Mon": { "time": '8:00 AM - 9:00 PM' }, "Tue": { "time": '8:00 AM - 9:00 PM' }, "Wed": { "time": '8:00 AM - 9:00 PM' },
             "Thu": { "time": '8:00 AM - 9:00 PM' }, "Fri": { "time": '8:00 AM - 9:00 PM' }, "Sat": { "time": '8:00 AM - 9:00 PM' }, "Sun": { "time": '8:00 AM - 9:00 PM' } }
  )

  # Business.create!(
  #   name: 'Lucky',
  #   address: '',
  #   phone: '',
  #   website: '',
  #   cost: '$$',
  #   lat: '',
  #   lng: ''
  # )

  Business.create!(
    name: 'The Home Depot',
    address: '303 E Lake Merced Blvd Daly City, CA 94015',
    phone: '(650) 755-0178',
    website: 'https://www.homedepot.com',
    cost: '$$',
    hours: { "Mon": { "time": '6:00 AM - 10:00 PM' }, "Tue": { "time": '6:00 AM - 10:00 PM' }, "Wed": { "time": '6:00 AM - 10:00 PM' },
             "Thu": { "time": '6:00 AM - 10:00 PM' }, "Fri": { "time": '6:00 AM - 10:00 PM' }, "Sat": { "time": '6:00 AM - 10:00 PM' }, "Sun": { "time": '7:00 AM - 8:00 PM' } },

    latlng: make_coord('37.69900782936481, -122.48302795878271')
  )
  puts 'Done with Businesses'
  # 10.times do
  #   Business.create!({
  #     name: Faker::Company.name,
  #     address: Faker::Address.street_address,
  #     phone: Faker::PhoneNumber.phone_number,
  #     email: Faker::Internet.email,
  #     website: Faker::Internet.url(host: 'example.com'),
  #     cost: '$',
  #     lat: Faker::Address.latitude.to_f.round(6),
  #     lng: Faker::Address.longitude.to_f.round(6),
  #     # photos:[]

  #   })

  # end
  # puts "Creating reviews"
  # 8.times do
  #   Review.create(
  #     author_id: User.all.sample,
  #     business_id: Business.all.sample,
  #     rating: Faker::Number.between(from: 1, to: 5),
  #     body: Faker::Lorem.paragraph
  #   )
  # end

  reviews = {
    Trader_Joe__s: [
      { rating: 5, body: "But the parking lot is pain to get into!  But Masonic is always backed up! But, But, But.....  If these are the reasons you aren't going to Trader Joe's you've got issues.  This is the best chain of grocery store i have ever been in, and I'm not going to drive any further than i have to to get here.  The 5 minutes i might sacrifice waiting for the parking security to wave me over into a spot would be far less than it would take me to drive across the city to another more parking-friendly location.
        All i can say to that is...." },
      { rating: 4, body: "First off, for all those who say this is a rough,bad,hood venue you really do not understand what that means.   It is not in a rough, dangerous area with people waiting around corners to get you.  Be real.   It's in a mixed use area near freeway overpasses and light industry. Period. It's certainly not scary.
        The produce is fresh, good selection and LOW prices.  I think it's half off or more from what they charge at Safeway.  The same goes for meats.....good selection at amazingly low prices, especially poultry.
        The store has a 'warehouse' feel to it.  Nothing fancy but clean and well organized.
        The staff is very pleasant and helpful.  Fellow customers are respectful.  If you want to see drama/theater go to the Safeway on Webster.....it's always a scene.
        So why not 5 stars?  Simple.  They tend to only have half the check out lines open while lines gather from one end of the store to the other and take 30+ minutes.  Just hire more checkers and get people through in a reasonable time.  Second, the exterior/parking lot is a mess.  Its grimy, filthy, trash covered, etc. with random carts left scattered about. Surely its not too much to hire someone to look after that area.
      " },
      { rating: 1, body: "LOL!!  LOW LOW LOW PRICES????  uuuuuhhh ok.....
        Someone here on the post said this about FOODSCO....NOT!  They like all stores have high low prices, but their CUSTOMER SERVICE IS HORRIBLE, that is my point, not their food. I am going to do you all another favor....." },
      { rating: 1, body: "tonight at 9:00 we drove to store on 'folsom' st. when we walked up, it looked like the covid
        days, about 6-people were waiting outside in the dark and cold, there was a homeless man sitting right there at
        their feet basically while we were waiting, i asked why they were waiting and why was the doors locked, they
        said they were told the store had only 1-cashier and were not allowing people in.  when i looked in, there was no
         one at the door, nor security. no one was in the register but one cashier. this store has had severe issues since
         i moved here in s.f. 1/5/23. they usually have 2-cashiers, maybe 3 on a good day, the lines are always to the back
         of the store. the cashier mostly complain, run around doing what they want to do, when they want to do it when assisting customers.
          i will no longer be forwarding my employees to go buy food from here for our homeless families because it is a waste of time, every time. the employees run the store, like there is no management.  why is this happening?" },
      { rating: 3, body: "This place is the closest grocery store to my apartment.
          It is okay but I would prefer a Trader Joe's any time over this one but propably cause I am vegetarian and TJ has so much more options there.
          Anyway this place is nice enough and opens late.
          Big downside for me that they do not take visa payments!" },
      { rating: 4, body: "This is the perfect store for someone on a budget.  I have been here three times in the past six months.  My son has limited space in his dorm, yet we are able to get a great deal of food for less than $100 without buying huge quantities.
          There are numerous vegetable options and I have yet to run into bad ones.  They have amazing prices on jarred pasta sauces and Ken's salad dressing.
          Most of the meat is decent quality.  This particular trip we were looking to purchase some fresh (as fresh as could be at this store) salmon, but they didn't have any.  We opted for frozen instead.  It was super thin and I wouldn't buy it for myself.  However, my son thought it was good.
          Dairy items are also inexpensive and there are many options.
          Parking is one of the major issues.  On one hand, it is awesome that they have their own parking lot (major plus in San Francisco), however, the spots seem tiny and it is always packed.  Another issue is the fact that there are a great many derelicts walking about near the store or in the parking lot.
          Here's What I Think... We will continue shopping here for the next two and a half years." }

    ]
  }
  puts 'writing reviews....'

  reviews.each do |key, value|
    name = key.to_s
    modName = name.gsub('__', "'")
    modmodName = modName.gsub('_', ' ')
    business = Business.find_by(name: modmodName)
    value.each do |review|
      Review.create(
        author_id: User.all.sample.id,
        business_id: business.id,
        rating: review[:rating],
        body: review[:body]
      )
    end
  end
end
puts 'Done!'

puts 'attaching photos....'

def preprocessName(name)
  modName = name.gsub(' ', '_')
  modName.gsub("'", '__')
end

Business.all.each do |bus|
  business = Business.find_by(name: bus.name)
  (1..5).each do |i|
    next unless business.images

    business.images.attach(
      io: URI.open("https://zelp99-seeds.s3.us-west-1.amazonaws.com/#{preprocessName(business.name)}_a#{i}.jpeg"),
      filename: "#{preprocessName(business.name)}_a#{i}.jpeg"
    )
  end
end

puts 'Done!'

puts 'creating tags...'

tags = [
  'Appliances',
  'Gardening',
  'Grocery',
  'Hardware',
  'Lawn Service',
  'Lumber',
  'Plumbing Service',
  'Plumbing Supplies',
  'Restaurant'
]

tags.each do |tag|
  Tag.create!(
    tag:
  )
end

puts 'Done with creating tags'

puts 'attaching tags'

# bus = Business.find_by(name: 'Sprouts')
# tag = Tag.find_by(tag: 'Grocery')

# BusinessTag.create!(
#   business_id: bus.id,
#   tag_id: tag.id
# )

def attachTag(data)
  bus = Business.find_by(name: data[0])
  tag = Tag.find_by(tag: data[1])
  BusinessTag.create!(
    business_id: bus.id,
    tag_id: tag.id
  )
end

allTags = [
  ['Sprouts', 'Grocery'],
  ['Trader Joe\'s', 'Grocery'],
  ['The Home Depot', 'Lumber'],
  ['The Home Depot', 'Appliances'],
  ['The Home Depot', 'Gardening'],
  ['The Home Depot', 'Plumbing Supplies']
]

allTags.each do |data|
  attachTag(data)
end

puts 'Done attaching tags'
