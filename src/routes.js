import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  {
    exact: false,
    // ایدی متغیر است و از کامپوننت هدر می اید
    path: "/product/:id",
    element: <Product />,
  },
  { path: "*", element: <Home /> },
];

export default routes;
