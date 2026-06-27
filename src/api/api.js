export async function fetchCats(api_key) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${api_key}`,
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }
  console.log(res);
  const data = await res.json();
  return data;
}
