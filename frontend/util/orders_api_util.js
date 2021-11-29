export const fetchOrders = () => (
  $.ajax({
    method: "GET",
    url: "api/orders"
  })
);

export const fetchOrder = orderId => (
  $.ajax({
    method: "GET",
    url: `api/orders/${orderId}`
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

export const deleteOrder = orderId => (
  $.ajax({
    method: "DELETE",
    url: `api/orders/${orderId}`
  })
)