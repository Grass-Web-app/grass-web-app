import { Routes, Route } from "react-router-dom";
import CatalogueId from "../../modules/CatalogueId";
import Home from "../../modules/Home";
import Page404 from "../../modules/Page404";
import RedirectTo404 from "../../modules/RedirectTo404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catalogue/:name" element={<CatalogueId />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<RedirectTo404 />} />
    </Routes>
  );
};

export default Router;
