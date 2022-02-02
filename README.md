# [Pawzon](https://pawzon.herokuapp.com/#/)

Pawzon is a full-stack, single-page web application inspired by Amazon. The theme of Pawzon is dogs, so all products are dog related. Similar to Amazon, users are able to sign up, login, browse and search products, create, edit, or delete reviews, add products to cart, and checkout. 

![](https://github.com/dchaan/Pawzon/blob/master/app/assets/images/projectpic.png)

## Technologies Used
* Ruby on Rails
* JavaScript
* React
* Redux
* jBuilder
* jQuery
* CSS
* AWS

## Features
### Search
The searchbar will search for products utilizing the product's name, description, or category to search by.
The searchbar component is imported into the navbar component, allowing the searchbar to be used at any time.
If the searchbar is executed with no input text, all products will be rendered on the products page.
The navbar also includes category links that displays the products for that specific category. This works by searching for the products with that specific category name.

Products Model
````ruby
def self.search(query) 
  self.where("product_name ILIKE ?", "%#{query}%")
  .or(self.where("description ILIKE ?", "%#{query}"))
  .or(self.where("category ILIKE ?", "%#{query}"))
end
````
Products Controller
````ruby
def index
    @products = query ? Product.search(query.downcase) : Product.all
    render :index
  end
````

![](https://github.com/dchaan/Pawzon/blob/master/public/images/search.gif)

---

### Add to Cart
From a specific product's page, logged in users are able to update the quantity and add the product to the cart.
The subtotal in the cart component will update depending on the quantities and prices of the products in the cart.
A small detail to notice is the cart quantity in the navbar which updates based on the number of products in the cart.

A tricky part for the cart component was if a specific product was already in the cart, adding that same product to the cart again would create two cart items of the same product instead of updating the quantity. To resolve this, I had to check if the `product_id` matched any of the `product_id`s in the cart, and if so, update the quantity instead of adding an entirely new product to the cart.
````javascript
handleAddToCart(e) {
  e.preventDefault;
  let currentCartItemId;
  let currentQuantity;
    
  this.props.cartItems.forEach(cartItem => {
    if (cartItem.product_id === this.props.product.id) {
      currentCartItemId = cartItem.id;
      currentQuantity = cartItem.quantity;
    };
  });

  const cartItem = {
    product_id: this.props.productId,
    user_id: this.props.user,
    quantity: this.state.quantity
  };
    
  const updatedCartItem = {
    id: currentCartItemId,
    product_id: this.props.productId,
    user_id: this.props.user,
    quantity: parseFloat(this.state.quantity) + parseFloat(currentQuantity)
  };
````

![](https://github.com/dchaan/Pawzon/blob/master/public/images/atc.gif)

---

### Create Review
Uses that are not logged in will be redirected to the login page if they click on the "Write a Review" button. Logged in users are able to write reviews as well as edit and delete their own reviews. Once a review is created, it will appear at the top of the reviews component.

To allow users to edit or delete their own reviews, the `review.user_id` was checked against `currentUser.id`
````javascript
const deleteEditReview = currentUser ? currentUser.id === review.user_id ?
  <div>
    <div className="edit-delete"> 
      <button className="edit-delete-btn" onClick={e => this.handleDelete(e)}>Delete</button>
    </div>
    <div className="edit-delete">
      <Link to={`/products/${productId}/reviews/${review.id}`}><button className="edit-delete-btn">Edit</button></Link>
    </div>
 </div> : null : null
````

![](https://github.com/dchaan/Pawzon/blob/master/public/images/review.gif)
