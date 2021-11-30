import { RECEIVE_CART, REMOVE_CART } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CART:
      nextState[action.cart.id] = action.cart;
      return nextState;
    case REMOVE_CART:
      delete nextState[action.cart.id];
      return nextState;
    default:
      return state;
  }
}

export default cartReducer;