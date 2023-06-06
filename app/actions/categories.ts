import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAllCategories() {
  const response = await fetch(`${base_url}/api/showcase/ecommerce/categories`);
  return await response.json();
}

export async function createNewCategory(data: { category: string }) {
  return await axios.post("/api/showcase/ecommerce/categories", data);
}

export async function deleteCategory(categoryId: string) {
  return await axios.delete(
    `/api/showcase/ecommerce/categories?id=${categoryId}`
  );
}
