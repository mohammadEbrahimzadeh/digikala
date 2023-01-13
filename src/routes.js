import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import SearchProductPage from "./Pages/SearchProductPage/SearchProductPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  {
    exact: false,
    // ایدی متغیر است و از کامپوننت هدر می اید
    path: "/product/:id",
    element: <Product />,
  },
  {
    exact: false,
    // ایدی متغیر است و از کامپوننت هدر می اید
    path: "/Search",
    element: <SearchProductPage />,
  },
  { path: "*", element: <Home /> },
];

export default routes;
