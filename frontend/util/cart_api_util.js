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

export const deleteCart = cart => (
  $.ajax({
    method: "DELETE",
    url: `api/carts/${cart.id}`
  })
);