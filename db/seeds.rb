# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product1 = Product.create!(
  prdouct_name: "Orthopedic Memory Foam Dog Bed",
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
  product_name: "Automatic Self-Cleaning Cat Litter Box",
  description: "Automatically removes waste,
                Odor control,
                No more messy floors,
                Leak protection",
  price: 79.99,
  category: "Cat Beds"
  category_id: 2,
  rating: 4.5,
  image_url: "https://m.media-amazon.com/images/I/61j9Fk-Q48L._AC_SL1024_.jpg"
)