# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')

user1 = User.create!(
  email: "demo@demo.com",
  password: "password",
  first_name: "Demo",
  last_name: "User"
)

# 1. Dog Beds
product1 = Product.create!(
  product_name: "Orthopedic Memory Foam Dog Bed",
  description: "Removable Outer Cover that is washable for easy cleaning,
                The lavish cloud surface gives dogs plenty of space,
                Sofa-like bolsters on three sides",
  price: 49.99,
  category: "Beds",
  category_id: 1,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/71eNn7rDAPL._AC_SL1500_.jpg"
)
product1.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod1.jpg'), filename: 'prod1.jpg')

product2 = Product.create!(
  product_name: 'Small Round Calming Dog Bed',
  description: 'Support premium sleep,
                Super warm plush,
                Non-slip bottom,
                Machine Washable',
  price: 29.99,
  category: 'Beds',
  category_id: 1,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/81t-YQSdMPL._AC_SL1500_.jpg'
)
product2.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod2.jpg'), filename: 'prod2.jpg')

product3 = Product.create!(
  product_name: 'Extra Large Memory Foam Dog Bed with Pillow',
  description: 'Exclusive design, double pillow smart design,
                Orthopedic memory foam,
                Waterproof design,
                Extra large bed',
  price: 145.99,
  category: 'Beds',
  category_id: 1,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/7186klacOtL._AC_SL1500_.jpg'
)
product3.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod3.jpg'), filename: 'prod3.jpg')

# 2. Dog Food
product4 = Product.create!(
  product_name: 'Purina Pro Plan, Adult Dog Food Chicken & Rice',
  description: '35 lb. Bag,
                High protein with probiotics,
                Real chicken as first ingredient',
  price: 49.98,
  category: 'Food',
  category_id: 2,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/81ngwMbqC3L._AC_SL1500_.jpg'
)
product4.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod4.jpg'), filename: 'prod4.jpg')

product5 = Product.create!(
  product_name: 'Cesar Gourmet Wet Dog Food Variety Pack',
  description: '36-count case of 3.5oz trays,
                6 filet mignon flavor,
                6 filet mignon with bacon & potatoes flavor,
                6 porterhouse flavor,
                6 gravy prime rib flavor,
                6 steak & egg flavor,
                6 NY strip steak flavor',
  price: 31.98,
  category: 'Food',
  category_id: 2,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/815j59r4TzS._AC_SL1500_.jpg'
)
product5.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod5.jpg'), filename: 'prod5.jpg')

product6 = Product.create!(
  product_name: 'Natural Balance Fat Dogs | Low Calorie Dry Dog Food',
  description: '28 lb. bag of dry dog food,
                Made with targeted levels of L-carnitine to help maintain a healthy weight,
                Contains special fiber and protein blend,
                Includes wholesome grains',
  price: 57.88,
  category: 'Food',
  category_id: 2,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/818miVEklmL._AC_SL1500_.jpg'
)
product6.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod6.jpg'), filename: 'prod6.jpg')

# 3. Dog Toys
product7 = Product.create!(
  product_name: 'White Paw Dog Toys with Squeaker',
  description: 'Plush dog toys that look like White Claws,
                Squeaker inside, keeps them entertained,
                7 inch stuffed dog toy',
  price: 13.99,
  category: 'Toys',
  category_id: 3,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/7191kVHN7sS._AC_SL1440_.jpg'
)
product7.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod7.jpg'), filename: 'prod7.jpg')


product8 = Product.create!(
  product_name: 'Snuffle Mat for Dogs - Interactive Dog Puzzle',
  description: 'Improve your dogs foraging skills,
                Slow feeding leads to good gut health,
                Mess-free meal times,
                Machine washable,
                Free frisbee included',
  price: 15.99,
  category: 'Toys',
  category_id: 3,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/81nCeEP+oeL._AC_SL1500_.jpg'
)
product8.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod8.jpg'), filename: 'prod8.jpg')


product9 = Product.create!(
  product_name: 'Automatic Dog Ball Launcher',
  description: 'Stiumlate dogs mind,
                Adjustable distance setting,
                Exercise and entertain,
                Includes 3 tennis balls',
  price: 114.99,
  category: 'Toys',
  category_id: 3,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/61YeX9yhUhL._AC_SL1500_.jpg'
)
product9.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod9.jpg'), filename: 'prod9.jpg')


# 4. Dog Treats
product10 = Product.create!(
  product_name: 'Purina Prime Bones Natural Dog Treats',
  description: '9.7 oz pouch,
                Plastic & rawhide free dog chews,
                Antler shaped natural dog chews with added calcium,
                Extra long lasting',
  price: 8.97,
  category: 'Treats',
  category_id: 4,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/51v7TxWC3RL._AC_.jpg'
)
product10.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod10.jpg'), filename: 'prod10.jpg')


product11 = Product.create!(
  product_name: 'Nutrish Soup Bones Dog Treat Chews',
  description: '11 count of soup bones dog treats,
                Savory, long-lasting chews with a tender, meaty center,
                No meat by-products or artificial flavors',
  price: 9.99,
  category: 'Treats',
  category_id: 4,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/81TUiyrkoWL._AC_SL1500_.jpg'
)
product11.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod11.jpg'), filename: 'prod11.jpg')


product12 = Product.create!(
  product_name: 'Milk-Bone Soft & Chewy Dog Treats',
  description: '25 oz container of Milk-Bone Soft & Chewy dog treats,
                Made with real chuck roast,
                Fortified with 12 vitamins and minerals',
  price: 11.98,
  category: 'Treats',
  category_id: 4,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/81YSdPdKGHL._AC_SL1500_.jpg'
)
product12.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod12.jpg'), filename: 'prod12.jpg')


# 5. Dog Clothes
product13 = Product.create!(
  product_name: 'Cozy Waterproof Windproof Reversible Plaid Dog Vest',
  description: 'To better fit your dog please measure the size of your dog,
                Polyester-fiber water-resistant,
                Exquisite stitching,
                Easy hook and loop closure makes it easy to put on',
  price: 18.99,
  category: 'Clothes',
  category_id: 5,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/7182W-HNhDL._AC_SL1500_.jpg'
)
product13.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod13.jpg'), filename: 'prod13.jpg')


product14 = Product.create!(
  product_name: '4 Piece Dog Pajamas for Small Dogs',
  description: 'Does not fit medium and large dogs,
                4-pk cartoon dog pajamas for small dogs,
                Soft material onesies for dogs will keep them warm and comfortable,
                Perfect for any occasion',
  price: 21.99,
  category: 'Clothes',
  category_id: 5,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/81Ufc7qMN5L._AC_SL1500_.jpg'
)
product14.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod14.jpg'), filename: 'prod14.jpg')


product15 = Product.create!(
  product_name: 'Dog Boots Paw Protector, Anti-Slip Dog Shoes with Reflective Straps',
  description: 'PAW PROTECTION: Paw wear can protect from sharp thorns and hot pavement,
                KEEP PUPPY SAFE: 3M reflective strip raises visibility,
                CUTE DOG BOOTS: Machine washable, but not waterproof,
                BREATHABLE: Mesh fabric provides high ventilation while keeping dirt and debris out',
  price: 25.99,
  category: 'Clothes',
  category_id: 5,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/71O3RuIg38S._AC_SL1500_.jpg'
)
product15.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod15.jpg'), filename: 'prod15.jpg')


# 6. Dog Walking
product16 = Product.create!(
  product_name: 'LED Dog Collar USB Rechareable',
  description: 'Ultimate safety, keeping your dog visible,
                Rechargeable battery that lasts multiple walks,
                Dog proof and weather-proof 100% guaranteed',
  price: 17.99,
  category: 'Walking',
  category_id: 6,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/81lnHom3JPL._AC_SL1500_.jpg'
)
product16.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod16.jpg'), filename: 'prod16.jpg')


product17 = Product.create!(
  product_name: 'Retractable Dog Leash 26ft',
  description: 'Extra length 26ft - gives your dog more space to sniff,
                Heavy-duty, durable, & sturdy,
                Reflective tape increases dog visibility,
                Ergonomic anti-slip soft handle',
  price: 23.99,
  category: 'Walking',
  category_id: 6,
  rating: 3,
  image_url: 'https://m.media-amazon.com/images/I/61mE2OzRY6L._AC_SL1500_.jpg'
)
product17.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod17.jpg'), filename: 'prod17.jpg')


product18 = Product.create!(
  product_name: 'Earth Rated Dog Poop Bags, Lavender-Scented, 900 count',
  description: '900 extra thick and strong poop bags,
                Guaranteed leak-proof,
                Lavender-scented,
                Includes 2 leash dispensers',
  price: 34.99,
  category: 'Walking',
  category_id: 6,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/71Ks+Gy4XvL._AC_SL1500_.jpg'
)
product18.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod18.jpg'), filename: 'prod18.jpg')


product19 = Product.create!(
  product_name: 'Portable Dog Paw Washer/ Pet Cleaner',
  description: 'It measures 6 inches tall and 4 inches wide,
                To use, add a little water, insert the muddy paw, do the twist, dab the paw dry, repeat for 3 more paws,
                The gentle silicone bristles will help remove dirt and mud from your dog''s paws,
                Simple and easy to use, just rinse and keep on hand for next muddy encounter',
  price: 17.14,
  category: 'Walking',
  category_id: 6,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/71dZRrY-SEL._AC_SL1500_.jpg'
)
product19.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod19.jpg'), filename: 'prod19.jpg')


product20 = Product.create!(
  product_name: 'Did You Feed The Dog?',
  description: 'Device helps keep track of when the dog was fed with simple color coding,
                Great way to teach children about the responsibility of pet ownership,
                Reminder helps to prevent overfeeding, which can in turn help to prevent obesity,
                Made of high-impact ABS plastic and mounts almost anywhere',
  price: 8.04,
  category: 'Food',
  category_id: 2,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/817sVXrfVNL._AC_SL1500_.jpg'
)
product20.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod20.jpg'), filename: 'prod20.jpg')


product21 = Product.create!(
  product_name: 'Cooling Elevated Dog Bed, Portable Raised Pet Cot',
  description: 'Can hold a maximum weight of 150 pounds (68kg),
                Stay Cool Ever! Crafted of mesh fabric in the center our bed allows air to flow keeping them cool while they relax in the heat,
                Stay cool in peak summer or cozy in the wintertime!,
                Easy to Assemble! No screws and wrenches needed',
  price: 38.99,
  category: 'Beds',
  category_id: 1,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/61Vcwoki2dL._AC_SL1500_.jpg'
)
product21.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod21.jpg'), filename: 'prod21.jpg')


product22 = Product.create!(
  product_name: 'Dog Cleaning Stick Chew Toy',
  description: 'helps satisfy your dog’s instinctual needs,
                IDEAL FOR WATER PLAY,
                DURABLE & SOFT: Complying with the exact same safety standard as children''s toys, the dog ball is made of premium PU,
                EASY TO USE AND CLEAN: 100% Natural Rubber',
  price: 12.86,
  category: 'Toys',
  category_id: 3,
  rating: 4,
  image_url: 'https://m.media-amazon.com/images/I/81PEx4nN07L._SL1381_.jpg'
)
product22.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod22.jpg'), filename: 'prod22.jpg')


product23 = Product.create!(
  product_name: 'Cute Green Dog Hoodie',
  description: 'Classic excellent and comfortable hooded sweater design,
                Made of soft Fabric Fabic,
                Bright colors with unique frog design,
                It can help reduce the fall of pet hair',
  price: 11.99,
  category: 'Clothes',
  category_id: 5,
  rating: 3.5,
  image_url: 'https://m.media-amazon.com/images/I/51goIo9vHoS._AC_SL1500_.jpg'
)
product23.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod23.jpg'), filename: 'prod23.jpg')


product24 = Product.create!(
  product_name: 'Adult Healthy Weight Dry Dog Food, All Breed Sizes, Lamb & Chicken',
  description: 'Contains one (1) 30 lb. bag of NUTRO NATURAL CHOICE Healthy Weight Adult Dry Dog Food,
                Made with non-GMO ingredients; no chicken by-product meal,
                High quality protein source is the ingredient in the delicious dry kibble,
                Helps support healthy weight loss with a tailored blend of protein and fiber,
                Formulated to support healthy immunity with essential antioxidants and healthy digestion with natural fiber',
  price: 51.98,
  category: 'Food',
  category_id: 2,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/71pnfqIMpXL._AC_SL1500_.jpg'
)
product24.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod24.jpg'), filename: 'prod24.jpg')


product25 = Product.create!(
  product_name: ' Floppy Fish Dog Toy',
  description: 'Floppy fish cat toy with automatic induction movement,
                Fabric printed with 3D printing technology has a sensitive touch makeing the flopping fish swing like a real fish,
                Floppy fish uses high-quality plush cloth',
  price: 13.13,
  category: 'Toys',
  category_id: 3,
  rating: 4.5,
  image_url: 'https://m.media-amazon.com/images/I/617KeEkZ7QL._AC_SL1100_.jpg'
)
product25.photo.attach(io: open('https://pawzon-seed.s3.us-west-1.amazonaws.com/prod25.jpg'), filename: 'prod25.jpg')


review1 = Review.create!(
  title: 'Great bed!',
  body: 'My puppy loves this bed',
  rating: 4.5,
  user_id: 1,
  product_id: 1
)

review2 = Review.create!(
  title: 'Super comfy!',
  body: 'My frenchie is obssessed',
  rating: 5,
  user_id: 1,
  product_id: 2
)

review3 = Review.create!(
  title: 'Not the best',
  body: 'Bed is a little flat',
  rating: 3.5,
  user_id: 1,
  product_id: 3
)

review4 = Review.create!(
  title: 'My dog loves the food!',
  body: 'My dog devours the food so quickly',
  rating: 4.5,
  user_id: 1,
  product_id: 4
)

review5 = Review.create!(
  title: 'Great to mix',
  body: 'My dog only eats his dry food with this mixed in',
  rating: 4.5,
  user_id: 1,
  product_id: 5
)

review6 = Review.create!(
  title: 'My dog is losing weight!',
  body: 'This food is really helping my dog shed some lbs',
  rating: 4,
  user_id: 1,
  product_id: 6
)

review7 = Review.create!(
  title: 'Cheaply made',
  body: 'Cool design but poorly made. Ripped in a week',
  rating: 2.5,
  user_id: 1,
  product_id: 7
)

review8 = Review.create!(
  title: 'Keeps my pup busy for hours!',
  body: 'Great way to keep my puppy busy and engaged.',
  rating: 4.5,
  user_id: 1,
  product_id: 8
)

review9 = Review.create!(
  title: 'Great invention',
  body: 'Tires my dog out without having me to waste so many hours',
  rating: 4,
  user_id: 1,
  product_id: 9
)

review10 = Review.create!(
  title: 'My dog loves them!',
  body: 'They smell great and my dog loves them',
  rating: 4,
  user_id: 1,
  product_id: 10
)

review11 = Review.create!(
  title: 'They''re not bad',
  body: 'These can be a hit or miss depending on the day',
  rating: 3.5,
  user_id: 1,
  product_id: 11
)

review12 = Review.create!(
  title: 'Classic treat',
  body: 'Any dog will eat these',
  rating: 4,
  user_id: 1,
  product_id: 12
)

review13 = Review.create!(
  title: 'Cute and good quality!',
  body: 'My doggo loves it and people compliment it all the time!',
  rating: 4.5,
  user_id: 1,
  product_id: 13
)

review14 = Review.create!(
  title: 'Cute but cheap quality',
  body: 'Adorable designs but they feel cheaply made',
  rating: 3.5,
  user_id: 1,
  product_id: 14
)

review15 = Review.create!(
  title: 'They do the job!',
  body: 'The boots do what they''re supposed to. No complaints here',
  rating: 4,
  user_id: 1,
  product_id: 15
)

review16 = Review.create!(
  title: 'Perfect for night walks',
  body: 'Keeps me and my dog safe during night walks',
  rating: 4.5,
  user_id: 1,
  product_id: 16
)

review17 = Review.create!(
  title: 'Cheap',
  body: 'Poor quality, wouldn''t buy again',
  rating: 3,
  user_id: 1,
  product_id: 17
)

review18 = Review.create!(
  title: 'Bags smell great',
  body: 'The scented bags mask the smell of the poop',
  rating: 4,
  user_id: 1,
  product_id: 18
)