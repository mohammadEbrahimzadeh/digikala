export default async function HomePage() {
  let res = await fetch("https://leverapi.f4rd1n.ir/api/digikala");
  res = await res.json();
  return res;
}
