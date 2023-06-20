import * as APIUtil from "../util/cart_item_api_util";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

export const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

export const fetchCartItems = () => dispatch => (
  APIUtil.fetchCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
);

export const fetchCartItem = cartItemId => dispatch => (
  APIUtil.fetchCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = cartItem => dispatch => (
  APIUtil.createCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const updateCartItem = cartItem => dispatch => (
  APIUtil.updateCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = cartItem => dispatch => (
  APIUtil.deleteCartItem(cartItem)
    .then((cartItem) => dispatch(removeCartItem(cartItem)))
);