import React from "react";
import { useRoutes } from "react-router-dom";

import NavBar from "./GolobalComponents/NavBar/NavBar";
import routes from "./routes";
import Footer from "./GolobalComponents/Footer/Footer";
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <NavBar></NavBar>
      {router}
      <Footer></Footer>
    </>
  );
}

export default App;
