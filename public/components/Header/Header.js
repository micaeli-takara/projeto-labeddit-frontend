import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToLogin, goToPosts } from "../../routes/coordinator";
import LogoLabedditMini from "../../../src/assets/LogoLabedditMini.svg";
import ImgBackPosts from "../../../src/assets/ImgBackPost.svg";
import { Button, HeaderWrapper, Logo, RightAlignedButtons } from "./HeaderStyle";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    goToLogin(navigate);
  };

  return (
    <HeaderWrapper>
      {location.pathname.includes(`/comments/`) && (
        <Button onClick={() => goToPosts(navigate)}>
          <img src={ImgBackPosts} alt="Voltar para a página de postagens" />
        </Button>
      )}
      <Logo src={LogoLabedditMini} alt="Logo da Labeddit" />
      <RightAlignedButtons>
        {location.pathname === "/signup" && (
          <Button onClick={() => goToLogin(navigate)}>Entrar</Button>
        )}
        {location.pathname === "/posts" && (
          <Button onClick={handleLogout}>Logout</Button>
        )}
        {location.pathname.includes(`/comments/`) && (
          <Button onClick={handleLogout}>Logout</Button>
        )}
      </RightAlignedButtons>
    </HeaderWrapper>
  );
}
