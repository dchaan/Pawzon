import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const removeCart = cart => ({
  type: REMOVE_CART,
  cart
});

export const fetchCart = cartId => dispatch (
  APIUtil.fetchCart(cartId)
    .then(cart => dispatch(receiveCart(cart)))
);

export const createCart = cart = dispatch => (
  APIUtil.createCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const deleteCart = cart = dispatch => (
  APIUtil.destroyCart(cart)
    .then(cart => dispatch(deleteCart(cart)))
);