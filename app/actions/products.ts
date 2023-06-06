import axios from "axios";
import { SafeProduct } from "../types";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProduct(data: { productId: string }) {
  const response = await fetch(
    `${base_url}/api/showcase/ecommerce/products?id=${data.productId}`
  );
  return await response.json();
}

export async function getAllProducts() {
  const response = await fetch(`${base_url}/api/showcase/ecommerce/products`);
  return await response.json();
}

export async function createNewProduct(data: SafeProduct) {
  return await axios.post("/api/showcase/ecommerce/products", data);
}
