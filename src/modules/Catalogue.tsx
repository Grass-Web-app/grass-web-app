import { Link, Outlet } from "react-router-dom";

const Catalogue = () => {
  return (
    <div>
      Estoy vacio morro
      <Link to={`/catalog/patitosnegros`}>patitos negros</Link>
      <Outlet />
    </div>
  );
};

export default Catalogue;
