import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CARTS = "RECEIVE_CARTS";
export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

export const receiveCarts = carts => ({
  type: RECEIVE_CARTS,
  carts
})

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const removeCart = cart => ({
  type: REMOVE_CART,
  cart
});

export const fetchCarts = () => dispatch => (
  APIUtil.fetchCarts()
    .then(carts => dispatch(receiveCarts(carts)))
);

export const fetchCart = cart => dispatch => (
  APIUtil.fetchCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const createCart = cart => dispatch => (
  APIUtil.createCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const updateCart = cart => dispatch => (
  APIUtil.updateCart(cart)
    .then(cart => dispatch(receiveCart(cart)))
);

export const deleteCart = cartId => dispatch => (
  APIUtil.deleteCart(cartId)
    .then(cartId => dispatch(removeCart(cartId)))
);