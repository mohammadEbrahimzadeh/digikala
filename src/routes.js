import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import SearchPage from "./Pages/SearchPage/SearchPage";
import FAQ from "./Pages/FAQ/FAQ";
import SellInShop from "./Pages/SellInShop/SellInShop";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ReturnProduct from "./Pages/ReturnProduct/ReturnProduct";
import WarrantyShop from "./Pages/WarrantyShop/WarrantyShop";
import Privacy from "./Pages/Privacy/Privacy";

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
    path: "/Search/:query",
    element: <SearchPage />,
  },
  { path: "/faq", element: <FAQ /> },
  { path: "/sell-in-shop", element: <SellInShop /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/ReturnProduct", element: <ReturnProduct /> },
  { path: "/WarrantyShop", element: <WarrantyShop /> },
  { path: "/Privacy", element: <Privacy /> },
  { path: "*", element: <Home /> },
];
export default routes;
