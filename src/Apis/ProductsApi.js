export default async function ProductsApi(productId) {
  let res = await fetch(
    `https://leverapi.f4rd1n.ir/api/digikala/product/${productId}`
  );
  res = await res.json();
  return res;
}
