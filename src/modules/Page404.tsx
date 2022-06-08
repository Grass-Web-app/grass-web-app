import { Link } from "react-router-dom";
import page404 from "../assets/image/404-error-page.png";
import HeaderFooterWraper from "../components/layout/InitWraper";
import { ImgOnly } from "../components/page404/page404Styled";
const Page404 = () => {
  return (
    <HeaderFooterWraper show={false}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#7bb755",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImgOnly src={page404} />
        <p>¡Ups pagina no encontrada!</p>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <p>Click para regresar</p>
        </Link>
      </div>
    </HeaderFooterWraper>
  );
};

export default Page404;
