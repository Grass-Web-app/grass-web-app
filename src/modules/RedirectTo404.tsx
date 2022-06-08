import { Navigate } from "react-router-dom";

const RedirectTo404 = () => {
  return <Navigate to="/404" replace={true} />;
};

export default RedirectTo404;
