const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export default async function getCurrentUser_Client() {
  const response = await fetch(`${base_url}/api/getcurrentuser`);
  return await response.json();
}
