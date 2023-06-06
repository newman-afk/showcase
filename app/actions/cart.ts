import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTotalsOfProductsInCart() {
  const response = await fetch(
    `${base_url}/api/showcase/ecommerce/cart/quantity`
  );
  return await response.json();
}

export async function addToCart(id: string) {
  return await axios.post("/api/showcase/ecommerce/cart/add", {
    productId: id,
  });
}

export async function ProductInCart(id: string) {
  const response = await fetch(
    `${base_url}/api/showcase/ecommerce/cart/product?id=${id}`
  );
  return await response.json();
}
