import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "*", element: <Home /> },
];

export default routes;
