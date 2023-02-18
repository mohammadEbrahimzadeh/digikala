export default async function SearchProductApi(
  minPrice = "0",
  maxPrice = "100000000",
  query = " ",
  page = 1
) {
  let response = await fetch(
    `https://leverapi.f4rd1n.ir/api/digikala/search?price[min]=${minPrice}&price[max]=${maxPrice}&q=${query}&page=${page}`
  );
  response = await response.json();
  return response;
}
