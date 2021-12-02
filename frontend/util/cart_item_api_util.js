export const fetchCartItems = () => (
  $.ajax({
    method: "GET",
    url: "api/cart_items"
  })
);

export const fetchCartItem = cartItemId => (
  $.ajax({
    method: "GET",
    url: `api/cart_items/${cartItemId}`
  })
);

export const createCartItem = cart_item => (
  $.ajax({
    method: "POST",
    url: "api/cart_items",
    data: { cart_item }
  })
);

export const updateCartItem = cartItem => (
  $.ajax({
    method: "PATCH",
    url: `api/cart_items/${cartItem.id}`,
    data: { cartItem }
  })
);

export const deleteCartItem = cartItem => (
  $.ajax({
    method: "DELETE",
    url: `api/cart_items/${cartItem.id}`
  })
);