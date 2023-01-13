export default async function SearchProductApi(query, page) {
  let response = await fetch(
    `https://leverapi.f4rd1n.ir/api/digikala/search?q=${query}&page=${page}`
  );
  response = await response.json();
  return response;
}
