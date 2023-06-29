import React, { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";

import NavBar from "./GolobalComponents/NavBar/NavBar";
import routes from "./routes";
import Footer from "./GolobalComponents/Footer/Footer";
function App() {
  const router = useRoutes(routes);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);
  return (
    <>
      <NavBar></NavBar>
      {router}
      <Footer></Footer>
    </>
  );
}

export default App;
