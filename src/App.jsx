import React from "react";
import { useRoutes } from "react-router-dom";

import NavBar from "./GolobalComponents/NavBar/NavBar";
import routes from "./routes";
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <NavBar></NavBar>
      {router}
    </>
  );
}

export default App;
