import { Routes, Route } from "react-router-dom";

import CatalogueId from "../modules/CatalogueId";
import Home from "../modules/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catalogue/:name" element={<CatalogueId />} />
    </Routes>
  );
};

export default Router;
