export const fetchCarts = () => (
  $.ajax({
    method: "GET",
    url: "api/carts"
  })
)

export const fetchCart = cart => (
  $.ajax({
    method: "GET",
    url: `api/carts/${cart.id}`
  })
);

export const createCart = cart => (
  $.ajax({
    method: "POST",
    url: "api/carts",
    data: { cart }
  })
);

export const updateCart = cart => (
  $.ajax({
    method: "PATCH",
    url: `api/carts/cart.id`,
    data: { cart }
  })
)

export const deleteCart = cartId => (
  $.ajax({
    method: "DELETE",
    url: `api/carts/${cartId}`
  })
);