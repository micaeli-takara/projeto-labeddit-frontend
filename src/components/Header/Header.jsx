import {
  ButtonLogin,
  ContainerHeader,
  ContainerHeaderComments,
} from "./HeaderStyle";
import LogoLabedditMini from "../../../src/assets/LogoLabedditMini.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ImgBackPosts from "../../../src/assets/ImgBackPost.svg";
import { goToLogin, goToPosts } from "../../routes/coordinator";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    window.localStorage.removeItem("token");
    goToLogin(navigate);
  };

  if (location.pathname === "/signup") {
    return (
      <ContainerHeader>
        <div>
          <img src={LogoLabedditMini} alt="Logo da Labeddit" />
        </div>
        <ButtonLogin onClick={() => goToLogin(navigate)}>Entrar</ButtonLogin>
      </ContainerHeader>
    );
  } else if (location.pathname === "/posts") {
    return (
      <ContainerHeader>
        <div>
          <img src={LogoLabedditMini} alt="Logo da Labeddit" />
        </div>
        <ButtonLogin onClick={Logout}>Logout</ButtonLogin>
      </ContainerHeader>
    );
  } else if (location.pathname.includes(`/comments/`)) {
    return (
      <ContainerHeaderComments>
        <button onClick={() => goToPosts(navigate)}>
          <img className="ButtonBackPost" src={ImgBackPosts} alt="Voltar para a página de postagens" />
        </button>
        <img src={LogoLabedditMini} alt="Logo da Labeddit" />
        <button onClick={Logout}>Logout</button>
      </ContainerHeaderComments>
    );
  }
}