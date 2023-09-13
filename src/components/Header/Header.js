import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToLogin, goToPosts } from "../../routes/coordinator";
import styled from "styled-components";
import LogoLabedditMini from "../../../src/assets/LogoLabedditMini.svg";
import ImgBackPosts from "../../../src/assets/ImgBackPost.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5; /* Cor de fundo um pouco mais clara */
  padding: 10px 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px; /* Adiciona uma sombra suave */
  height: 50px;
`;

const Logo = styled.img`
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: auto;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333; /* Cor do texto um pouco mais escura */
  margin: 0 10px; /* Espaçamento entre os botões */
  padding: 5px 10px; /* Espaçamento interno dos botões */
  border-radius: 5px; /* Borda arredondada nos botões */
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  font-family: Noto Sans;
font-size: 1.125rem;
font-style: normal;
font-weight: 600;
color: #4088CB;

  &:hover {
    background-color: #333; /* Cor de fundo escura no hover */
    color: #fff; /* Cor do texto branca no hover */
  }
`;

const RightAlignedButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

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
