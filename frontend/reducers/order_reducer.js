import { RECEIVE_ORDERS, RECEIVE_ORDER, REMOVE_ORDER } from "../actions/order_actions";

const orderReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, action);

  switch(action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    case RECEIVE_ORDER:
      nextState[action.order.id] = action.order;
      return nextState;
    case REMOVE_ORDER:
      delete nextState[action.order.id];
      return nextState;
    default:
      return state;
  }
}

export default orderReducer;