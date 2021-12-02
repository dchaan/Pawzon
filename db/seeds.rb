# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
  category: "Dog Beds",
  category_id: 1,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/71eNn7rDAPL._AC_SL1500_.jpg"
)

product2 = Product.create!(
  product_name: "Small Round Calming Dog Bed",
  description: "Support premium sleep,
                Super warm plush,
                Non-slip bottom,
                Machine Washable",
  price: 29.99,
  category: "Dog Beds",
  category_id: 1,
  rating: 3.5,
  image_url: "https://m.media-amazon.com/images/I/81t-YQSdMPL._AC_SL1500_.jpg"
)

product3 = Product.create!(
  product_name: "Extra Large Memory Foam Dog Bed with Pillow",
  description: "Exclusive design, double pillow smart design,
                Orthopedic memory foam,
                Waterproof design,
                Extra large bed",
  price: 145.99,
  category: "Dog Beds",
  category_id: 1,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/81t-YQSdMPL._AC_SL1500_.jpg"
)

# 2. Dog Food
product4 = Product.create!(
  product_name: "Purina Pro Plan, Adult Dog Food Chicken & Rice",
  description: "35 lb. Bag,
                High protein with probiotics,
                Real chicken as first ingredient",
  price: 49.98,
  category: "Dog Food",
  category_id: 2,
  rating: 4,
  image_url: "https://m.media-amazon.com/images/I/81ngwMbqC3L._AC_SL1500_.jpg"
)

product5 = Product.create!(
  product_name: "Cesar Gourmet Wet Dog Food Variety Pack",
  description: "36-count case of 3.5oz trays,
                6 filet mignon flavor,
                6 filet mignon with bacon & potatoes flavor,
                6 porterhouse flavor,
                6 gravy prime rib flavor,
                6 steak & egg flavor,
                6 NY strip steak flavor",
  price: 31.98,
  category: "Dog Food",
  category_id: 2,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/815j59r4TzS._AC_SL1500_.jpg"
)

product6 = Product.create!(
  product_name: "Natural Balance Fat Dogs | Low Calorie Dry Dog Food",
  description: "28 lb. bag of dry dog food,
                Made with targeted levels of L-carnitine to help maintain a healthy weight,
                Contains special fiber and protein blend,
                Includes wholesome grains",
  price: 57.88,
  category: "Dog Food",
  category_id: 2,
  rating: 3.5,
  image_url: "https://m.media-amazon.com/images/I/818miVEklmL._AC_SL1500_.jpg"
)

# 3. Dog Toys
product7 = Product.create!(
  product_name: "White Paw Dog Toys with Squeaker",
  description: "Plush dog toys that look like White Claws,
                Squeaker inside, keeps them entertained,
                7 inch stuffed dog toy",
  price: 13.99,
  category: "Dog Toys",
  category_id: 3,
  rating: 4,
  image_url: "https://m.media-amazon.com/images/I/7191kVHN7sS._AC_SL1440_.jpg"
)

product8 = Product.create!(
  product_name: "Snuffle Mat for Dogs - Interactive Dog Puzzle",
  description: "Improve your dogs foraging skills,
                Slow feeding leads to good gut health,
                Mess-free meal times,
                Machine washable,
                Free frisbee included",
  price: 15.99,
  category: "Dog Toys",
  category_id: 3,
  rating: 3.5,
  image_url: "https://m.media-amazon.com/images/I/81nCeEP+oeL._AC_SL1500_.jpg"
)

product9 = Product.create!(
  product_name: "Automatic Dog Ball Launcher",
  description: "Stiumlate dogs mind,
                Adjustable distance setting,
                Exercise and entertain,
                Includes 3 tennis balls",
  price: 114.99,
  category: "Dog Toys",
  category_id: 3,
  rating: 4,
  image_url: "https://m.media-amazon.com/images/I/61YeX9yhUhL._AC_SL1500_.jpg"
)

# 4. Dog Treats
product10 = Product.create!(
  product_name: "Purina Prime Bones Natural Dog Treats",
  description: "9.7 oz pouch,
                Plastic & rawhide free dog chews,
                Antler shaped natural dog chews with added calcium,
                Extra long lasting",
  price: 8.97,
  category: "Dog Treats",
  category_id: 4,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/51v7TxWC3RL._AC_.jpg"
)

product11 = Product.create!(
  product_name: "Nutrish Soup Bones Dog Treat Chews",
  description: "11 count of soup bones dog treats,
                Savory, long-lasting chews with a tender, meaty center,
                No meat by-products or artificial flavors",
  price: 9.99,
  category: "Dog Treats",
  category_id: 4,
  rating: 3.5,
  image_url: "https://m.media-amazon.com/images/I/81TUiyrkoWL._AC_SL1500_.jpg"
)

product12 = Product.create!(
  product_name: "Milk-Bone Soft & Chewy Dog Treats",
  description: "25 oz container of Milk-Bone Soft & Chewy dog treats,
                Made with real chuck roast,
                Fortified with 12 vitamins and minerals",
  price: 11.98,
  category: "Dog Treats",
  category_id: 4,
  rating: 4,
  image_url: "https://m.media-amazon.com/images/I/81YSdPdKGHL._AC_SL1500_.jpg"
)

# 5. Dog Walking
product13 = Product.create!(
  product_name: "LED Dog Collar USB Rechareable",
  description: "Ultimate safety, keeping your dog visible,
                Rechargeable battery that lasts multiple walks,
                Dog proof and weather-proof 100% guaranteed",
  price: 17.99,
  category: "Dog Walking",
  category_id: 5,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/81lnHom3JPL._AC_SL1500_.jpg"
)

product14 = Product.create!(
  product_name: "Retractable Dog Leash 26ft",
  description: "Extra length 26ft - gives your dog more space to sniff,
                Heavy-duty, durable, & sturdy,
                Reflective tape increases dog visibility,
                Ergonomic anti-slip soft handle",
  price: 23.99,
  category: "Dog Walking",
  category_id: 5,
  rating: 3,
  image_url: "https://m.media-amazon.com/images/I/61mE2OzRY6L._AC_SL1500_.jpg"
)

product15 = Product.create!(
  product_name: "Earth Rated Dog Poop Bags, Lavender-Scented, 900 count",
  description: "900 extra thick and strong poop bags,
                Guaranteed leak-proof,
                Lavender-scented,
                Includes 2 leash dispensers",
  price: 34.99,
  category: "Dog Walking",
  category_id: 5,
  rating: 4,
  image_url: "https://m.media-amazon.com/images/I/71Ks+Gy4XvL._AC_SL1500_.jpg"
)
