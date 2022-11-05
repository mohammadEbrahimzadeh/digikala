import Home from "./Pages/Home/Home";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <Home /> },
];

export default routes;
