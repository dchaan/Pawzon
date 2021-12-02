import { combineReducers } from 'redux'
import CartItemsReducer from './cart_items_reducer';
import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cartItems: CartItemsReducer
});

export default entitiesReducer;