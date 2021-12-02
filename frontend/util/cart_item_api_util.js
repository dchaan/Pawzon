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

export const updateCartItem = cart_item => (
  $.ajax({
    method: "PATCH",
    url: `api/cart_items/${cart_item.id}`,
    data: { cart_item }
  })
);

export const deleteCartItem = cartItem => (
  $.ajax({
    method: "DELETE",
    url: `api/cart_items/${cartItem.id}`
  })
);