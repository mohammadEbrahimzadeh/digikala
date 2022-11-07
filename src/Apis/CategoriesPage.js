//  https://leverapi.f4rd1n.ir/api/digikala/categories/[categoryId]/search/?page=[page]
//  https://leverapi.f4rd1n.ir/api/digikala/categories/mobile-phone/search?page=1
export default async function CategoriesPage(categoryId, page) {
  let res = await fetch(
    `https://leverapi.f4rd1n.ir/api/digikala/categories/${categoryId}/search?page=${[
      page,
    ]}`
  );
  res = await res.json();
  return res;
}
