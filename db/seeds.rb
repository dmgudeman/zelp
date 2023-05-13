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
  ApplicationRecord.connection.reset_pk_sequence!('business_tags')

  puts 'Creating users...'
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition',
    email: 'demo@user.io',
    password: 'password',
    name: 'Steve Garvey'
  )
  
  User.create!(
    username: 'RubyFan',
    email: 'rubyfan@example.com',
    password: 'password',
    name: 'Emma Lee'
  )
  
  User.create!(
    username: 'CodeWizard',
    email: 'codewizard@example.com',
    password: 'password',
    name: 'Maxwell Wong'
  )
  
  User.create!(
    username: 'JavaScripter',
    email: 'javascripter@example.com',
    password: 'password',
    name: 'Lucy Chen'
  )
  
  User.create!(
    username: 'RailsGuru',
    email: 'railsguru@example.com',
    password: 'password',
    name: 'John Smith'
  )
  
  User.create!(
    username: 'DesignQueen',
    email: 'designqueen@example.com',
    password: 'password',
    name: 'Mia Johnson'
  )
  
  User.create!(
    username: 'FrontendDev',
    email: 'frontenddev@example.com',
    password: 'password',
    name: 'Aiden Chen'
  )
  
  User.create!(
    username: 'BackendDev',
    email: 'backenddev@example.com',
    password: 'password',
    name: 'Leah Brown'
  )
  
  User.create!(
    username: 'Pythonista',
    email: 'pythonista@example.com',
    password: 'password',
    name: 'Oliver Davis'
  )
  
  User.create!(
    username: 'NodeNinja',
    email: 'nodeninja@example.com',
    password: 'password',
    name: 'Ella Lee'
  )
  
  User.create!(
    username: 'ReactLover',
    email: 'reactlover@example.com',
    password: 'password',
    name: 'Andrew Kim'
  )
  
  User.create!(
    username: 'VueFan',
    email: 'vuefan@example.com',
    password: 'password',
    name: 'Sophie Wang'
  )
  
  User.create!(
    username: 'FullStackDev',
    email: 'fullstackdev@example.com',
    password: 'password',
    name: 'Ryan Lee'
  )
  
  User.create!(
    username: 'JavaDeveloper',
    email: 'javaddeveloper@example.com',
    password: 'password',
    name: 'Grace Chen'
  )
  
  User.create!(
    username: 'PHPPro',
    email: 'phppro@example.com',
    password: 'password',
    name: 'Daniel Kim'
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

  Business.create!(
    name: 'Lucky',
    address: '615 W Hamilton Ave, Campbell, CA 95008',
    phone: '(408) 374-5065',
    website: 'https://www.luckysupermarkets.com/',
    cost: '$$',
    latlng: make_coord('37.287455950172295, -121.95481244340749'),
    hours: { "Mon": { "time": '6:00 AM - 12:00 AM' }, "Tue": { "time": '6:00 AM - 12:00 AM' },
             "Wed": { "time": '6:00 AM - 12:00 AM' }, "Thu": { "time": '6:00 AM - 12:00 AM' }, "Fri": { "time": '6:00 AM - 12:00 AM' }, "Sat": { "time": '6:00 AM - 12:00 AM' }, "Sun": { "time": '6:00 AM - 12:00 AM' } }
  )
  
  Business.create!(
    name: 'Nijiya Market',
    address: '1737 Post St, San Francisco, CA 94115',
    phone: '(415) 563-1901',
    website: 'https://www.nijiya.com/',
    cost: '$$$',
    latlng: make_coord('37.78472936082476, -122.42987330310264'),
    hours: { "Mon": { "time": '9:00 AM - 9:00 PM' }, "Tue": { "time": '9:00 AM - 9:00 PM' },
             "Wed": { "time": '9:00 AM - 9:00 PM' }, "Thu": { "time": '9:00 AM - 9:00 PM' }, "Fri": { "time": '9:00 AM - 9:00 PM' }, "Sat": { "time": '9:00 AM - 9:00 PM' }, "Sun": { "time": '9:00 AM - 9:00 PM' } }
  )


  Business.create!(
    name: 'The Home Depot',
    address: '303 E Lake Merced Blvd Daly City, CA 94015',
    phone: '(650) 755-0178',
    website: 'https://www.homedepot.com',
    cost: '$$',
    latlng: make_coord('37.69900782936481, -122.48302795878271'),
    hours: { "Mon": { "time": '6:00 AM - 10:00 PM' }, "Tue": { "time": '6:00 AM - 10:00 PM' }, "Wed": { "time": '6:00 AM - 10:00 PM' },
             "Thu": { "time": '6:00 AM - 10:00 PM' }, "Fri": { "time": '6:00 AM - 10:00 PM' }, "Sat": { "time": '6:00 AM - 10:00 PM' }, "Sun": { "time": '7:00 AM - 8:00 PM' } }
  )

  Business.create!(
    name: 'Lowes',
    address: '2175 S Mooney Blvd, Visalia, CA 93277',
    phone: '(559) 739-7195',
    website: 'https://www.lowes.com',
    cost: '$$',
    latlng: make_coord('36.31240681985834, -119.31515220293288'),
    hours: { "Mon": { "time": '6:00 AM - 9:00 PM' }, "Tue": { "time": '6:00 AM - 9:00 PM' },
             "Wed": { "time": '6:00 AM - 9:00 PM' }, "Thu": { "time": '6:00 AM - 9:00 PM' },
             "Fri": { "time": '6:00 AM - 9:00 PM' }, "Sat": { "time": '7:00 AM - 9:00 PM' },
             "Sun": { "time": '8:00 AM - 8:00 PM' } }
  )

  Business.create!(
    name: 'Restoration Hardware',
    address: '8772 Beverly Blvd West Hollywood, CA 90048',
    phone: '(310) 652-0323',
    website: 'https://www.restorationhardware.com',
    cost: '$$$',
    latlng: make_coord('34.07659670841554, -118.37635411303434'),
    hours: {
      "Mon": { "time": '10:00 AM - 7:00 PM' }, 
      "Tue": { "time": '10:00 AM - 7:00 PM' },
      "Wed": { "time": '10:00 AM - 7:00 PM' }, 
      "Thu": { "time": '10:00 AM - 7:00 PM' }, 
      "Fri": { "time": '10:00 AM - 7:00 PM' }, 
      "Sat": { "time": '10:00 AM - 7:00 PM' }, 
      "Sun": { "time": '11:00 AM - 6:00 PM' }
    }
  )
  

Business.create!(
  name: 'Olive Garden',
  address: '430 Bayshore Blvd San Francisco, CA 94124',
  phone: '(415) 648-0406',
  website: 'https://www.olivegarden.com',
  cost: '$$',
  latlng: make_coord('37.72701908211721, -122.40307634149791'),
  hours: { "Mon": { "time": '11:00 AM - 10:00 PM' }, "Tue": { "time": '11:00 AM - 10:00 PM' },
           "Wed": { "time": '11:00 AM - 10:00 PM' }, "Thu": { "time": '11:00 AM - 10:00 PM' }, "Fri": { "time": '11:00 AM - 11:00 PM' }, "Sat": { "time": '11:00 AM - 11:00 PM' }, "Sun": { "time": '11:00 AM - 10:00 PM' } }
)

Business.create!(
  name: 'Asian Box',
  address: '855 El Camino Real #109, Palo Alto, CA 94301',
  phone: '(650) 391-9305',
  website: 'https://www.asianbox.com/',
  cost: '$$',
  latlng: make_coord('37.442046, -122.161495'),
  hours: {
    "Mon": { "time": '11:00 AM - 9:00 PM' },
    "Tue": { "time": '11:00 AM - 9:00 PM' },
    "Wed": { "time": '11:00 AM - 9:00 PM' },
    "Thu": { "time": '11:00 AM - 9:00 PM' },
    "Fri": { "time": '11:00 AM - 9:00 PM' },
    "Sat": { "time": '11:00 AM - 9:00 PM' },
    "Sun": { "time": '11:00 AM - 9:00 PM' }
  }
)

Business.create!(
  name: 'Advanced Plumbing',
  address: '123 Main St, San Francisco, CA 94118',
  phone: '(415) 555-1234',
  website: 'http://www.advancedplumbing.com',
  cost: '$$$',
  latlng: make_coord('37.7749, -122.4194'),
  hours: { "Mon": { "time": '8:00 AM - 5:00 PM' }, "Tue": { "time": '8:00 AM - 5:00 PM' }, "Wed": { "time": '8:00 AM - 5:00 PM' },
           "Thu": { "time": '8:00 AM - 5:00 PM' }, "Fri": { "time": '8:00 AM - 5:00 PM' }, "Sat": { "time": 'Closed' }, "Sun": { "time": 'Closed' } }
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

    ],
    Safeway: [
      { rating: 3, body: "I come to Safeway mainly because it is close to my house, but it's not my favorite grocery store. The selection is fine, but the prices are higher than other stores in the area. The produce section is hit or miss - sometimes things look great, but other times they're pretty picked over and sad looking. The staff is generally friendly and helpful, but I've had a few negative interactions in the past. Overall, it's an okay option if you're in a pinch, but I prefer other grocery stores." },
      { rating: 2, body: "I'm not a fan of this Safeway. It always seems to be out of stock on items that I need and the layout of the store can be confusing. The produce section is decent, but the rest of the store is lacking. The staff is hit or miss - sometimes they're helpful, but other times they're not interested in helping at all. Parking can also be a nightmare, especially during peak hours. I'll only come here if I have to." },
      { rating: 4, body: "I've been shopping at this Safeway for a few years now and it's generally been a good experience. The store is clean and well-organized and I can usually find what I need. The prices are reasonable and there are often good deals to be had. The staff is friendly and helpful and the checkout lines move quickly. My only complaint is that the parking lot can be crowded and difficult to navigate, especially on weekends." },
      { rating: 5, body: "I love this Safeway! The selection is great and the prices are competitive. The store is always clean and well-stocked and the staff is friendly and helpful. I also appreciate that they have a good selection of organic and natural foods. The parking lot can get crowded, but I've never had too much trouble finding a spot. Overall, I highly recommend this Safeway." },
      { rating: 3, body: "This Safeway is just okay. The selection is fine, but the prices can be a bit high. The staff is hit or miss - some are friendly and helpful, while others seem disinterested. Parking can also be a challenge during peak hours. Overall, it's an average grocery store that gets the job done." },
      { rating: 1, body: "This Safeway is terrible. The produce is always sad looking and the prices are way too high. The store is poorly organized and the staff is unhelpful. I've had a few negative interactions with them in the past. The parking lot is also a nightmare - it's always crowded and difficult to navigate. I'll never shop here again." },
      { rating: 4, body: "I'm a fan of this Safeway. The selection is good and the prices are reasonable. The staff is generally friendly and helpful, although there have been a few exceptions. The store is clean and well-organized and the checkout lines move quickly. Parking can be a bit of a challenge, but I've always been able to find a spot eventually." }
      ],
      The_Home_Depot: [
        { rating: 5, body: "I always have a great experience shopping at The Home Depot. The staff is knowledgeable and helpful, and I can usually find everything I need for my projects. The prices are competitive and there are often good deals to be had. The store is clean and well-organized, and I appreciate that they have a wide selection of products. Overall, highly recommended!" },
        { rating: 3, body: "The Home Depot is a decent home improvement store, but it's not my favorite. While the selection is good, the prices can be a bit high. The staff is generally friendly and helpful, although I've had a few negative interactions in the past. The store can also be crowded and difficult to navigate during peak hours. Overall, it's a decent option if you need home improvement supplies." },
        { rating: 4, body: "I'm a fan of The Home Depot. The prices are reasonable and the selection is good. The staff is generally friendly and helpful, although I've had a few experiences where they weren't as knowledgeable as I would have liked. The store is clean and well-organized, and I appreciate that they offer classes and workshops for DIYers. The only downside is that the store can be crowded on weekends." },
        { rating: 2, body: "I'm not a fan of The Home Depot. While they have a good selection of products, the prices are often higher than other home improvement stores in the area. The staff is hit or miss - sometimes they're helpful, but other times they seem disinterested. The store can also be difficult to navigate and it's often crowded. Overall, I prefer to shop elsewhere for my home improvement needs." },
        { rating: 4, body: "I've had good experiences shopping at The Home Depot. The staff is generally friendly and knowledgeable, and the store is well-organized. The prices are reasonable and there are often good deals to be had. I appreciate that they offer a wide selection of products and that they have a rental center for larger tools. The only downside is that the store can be crowded on weekends." },
        { rating: 5, body: "The Home Depot is my go-to for all my home improvement needs. The staff is knowledgeable and helpful, and the prices are competitive. The store is clean and well-organized, and I appreciate that they have a wide selection of products. I also like that they offer free workshops and classes for DIYers. Overall, highly recommended!" },
        { rating: 3, body: "I have mixed feelings about The Home Depot. While the selection is good, the prices can be a bit high. The staff is hit or miss - sometimes they're helpful, but other times they seem disinterested. The store can also be crowded and difficult to navigate. However, I do appreciate that they offer free DIY workshops and classes. Overall, it's an average home improvement store." }
        ],
        Advanced_Plumbing: [
          { rating: 4, body: "I had a great experience with Advanced Plumbing. The staff was knowledgeable and helpful, and they were able to quickly diagnose and fix the issue with my plumbing. The prices were reasonable and the work was done efficiently. Overall, I would definitely recommend them." },
          { rating: 2, body: "I wasn't impressed with Advanced Plumbing. While they were able to fix the issue with my plumbing, the staff wasn't particularly friendly or helpful. The prices were also higher than I expected. Overall, it was an okay experience, but I don't think I would use them again." },
          { rating: 5, body: "I highly recommend Advanced Plumbing. The staff was friendly and professional, and they were able to fix my plumbing issue quickly and efficiently. The prices were also very reasonable. Overall, a great experience." },
          { rating: 4, body: "I had a positive experience with Advanced Plumbing. The staff was knowledgeable and able to fix the issue with my plumbing quickly. The prices were also reasonable. The only downside was that it took a little longer than I expected to schedule an appointment. Overall, I would recommend them." },
          { rating: 3, body: "My experience with Advanced Plumbing was average. The staff was able to fix the issue with my plumbing, but they weren't particularly friendly or helpful. The prices were also a bit higher than I expected. Overall, it was an okay experience." },
          { rating: 5, body: "I had a great experience with Advanced Plumbing. The staff was friendly and knowledgeable, and they were able to fix my plumbing issue quickly and efficiently. The prices were also very reasonable. I would definitely use them again in the future." },
          { rating: 2, body: "I wasn't impressed with Advanced Plumbing. The staff was unfriendly and unhelpful, and the prices were higher than I expected. The work they did also didn't fully fix the issue with my plumbing. Overall, I wouldn't recommend them." }
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
  'Plumbing Services',
  'Plumbing Supplies',
  'Restaurant',
  'Furnishings',
  'Italian Cuisine',
  'Asian Cuisine',
  'Services'
]

tags.each do |tag|
  Tag.create!(
    tag:
  )
end

puts 'Done with creating tags'

# puts 'attaching tags'

# # bus = Business.find_by(name: 'Sprouts')
# # tag = Tag.find_by(tag: 'Grocery')

# # BusinessTag.create!(
# #   business_id: bus.id,
# #   tag_id: tag.id
# # )

# def attachTag(data)
#   bus = Business.find_by(name: data[0])
#   tag = Tag.find_by(tag: data[1])
#   BusinessTag.create!(
#     business_id: bus.id,
#     tag_id: tag.id
#   )
# end

# allTags = [
#   ['Sprouts', 'Grocery'],
#   ['Trader Joe\'s', 'Grocery'],
#   ['Lucky', 'Grocery'],
#   ['Safeway', 'Grocery'],
#   ['Nijiya Market', 'Grocery'],
#   ['The Home Depot', 'Lumber'],
#   ['The Home Depot', 'Appliances'],
#   ['The Home Depot', 'Gardening'],
#   ['The Home Depot', 'Plumbing Supplies'],
#   ['The Home Depot', 'Hardware'],
#   ['Lowes', 'Lumber'],
#   ['Lowes', 'Appliances'],
#   ['Lowes', 'Gardening'],
#   ['Lowes', 'Plumbing Supplies'],
#   ['Lowes', 'Hardware'],
#   ['Restoration Hardware', 'Furnishings'],
#   ['Restoration Hardware', 'Hardware'],
#   ['Olive Garden', 'Restaurant'],
#   ['Olive Garden', 'Italian Cuisine'],
#   ['Asian Box', 'Restaurant'],
#   ['Asian Box', 'Asian Cuisine'],
#   ['Advanced Plumbing', 'Plumbing Services'],
#   ['Advanced Plumbing', 'Services']



# ]

# allTags.each do |data|
#   attachTag(data)
# end

# puts 'Done attaching tags'
