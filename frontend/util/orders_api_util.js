export const fetchOrders = () => (
  $.ajax({
    method: "GET",
    url: "api/orders"
  })
);

export const fetchOrder = order => (
  $.ajax({
    method: "GET",
    url: `api/orders/${order.id}`
  })
);

export const createOrder = order => (
  $.ajax({
    method: "POST",
    url: "api/orders",
    data: { order }
  })
);

export const updateOrder = order => (
  $.ajax({
    method: "PATCH",
    url: `api/orders/${order.id}`,
    data: { order }
  })
);

export const deleteOrder = order => (
  $.ajax({
    method: "DELETE",
    url: `api/orders/${order.id}`
  })
)