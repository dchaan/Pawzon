import * as APIUtil from "../util/orders_api_util";

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORER = "REMOVE_ORDER";

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const removeOrder = order => ({
  type: REMOVE_ORER,
  order
});

export const fetchOrders = () => dispatch => (
  APIUtil.fetchOrders()
    .then(orders => dispatch(receiveOrders(orders)))
);

export const fetchOrder = order => dispatch => (
  APIUtil.fetchOrder(order)
    .then(order => dispatch(receiveOrder(order)))
);

export const createOrder = order => dispatch => (
  APIUtil.createOrder(order)
    .then(order => dispatch(receiveOrder(order)))
);

export const updateOrder = order => dispatch => (
  APIUtil.updateOrder(order)
    .then(order => dispatch(receiveOrder(order)))
);

export const deleteOrder = order => dispatch => (
  APIUtil.deleteOrder(order)
    .then(order => dispatch(removeOrder(order)))
);