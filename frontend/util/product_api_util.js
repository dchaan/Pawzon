export const fetchProducts = query => (
  $.ajax({
    method: "GET",
    url: "/api/products",
    data: { query }
  })
);

export const fetchProduct = productId => (
  $.ajax({
    method: "GET",
    url: `/api/products/${productId}`,
    data: { productId }
  })
);

