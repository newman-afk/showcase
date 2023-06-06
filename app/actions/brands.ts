import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAllBrands() {
  const response = await fetch(`${base_url}/api/showcase/ecommerce/brands`);
  return await response.json();
}

export async function createNewBrand(data: { brand: string }) {
  return await axios.post("/api/showcase/ecommerce/brands", data);
}

export async function deleteBrand(brandId: string) {
  return await axios.delete(`/api/showcase/ecommerce/brands?id=${brandId}`);
}
