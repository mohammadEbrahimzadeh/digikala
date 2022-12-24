export default async function CommentsProduct(productId, page) {
  let res = await fetch(
    `https://leverapi.f4rd1n.ir/api/digikala/product/${productId}/comments?page=${page}`
  );
  res = await res.json();
  return res;
}
