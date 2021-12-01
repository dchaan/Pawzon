import { combineReducers } from 'redux'
import cartReducer from './cart_reducer';
import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cart: cartReducer
});

export default entitiesReducer;