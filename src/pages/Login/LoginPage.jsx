import React, { useEffect, useState } from 'react';
import logo from "../../assets/LogoLabeddit.svg";
import {
  ButtonsContainer,
  ColoredLine,
  Form,
  Logo,
  Main,
} from "./LoginPageStyle";
import { goToPosts, goToSignup } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  axios.post(`${BASE_URL}/users/login`, body);
  
  const [form, onChangeInputs,cleanInputs] = useForm

  //   const [hora, setHora] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setHora(new Date());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // const formatarNumero = (numero) => {
  //   return numero < 10 ? `0${numero}` : numero;
  // };

  // const horas = formatarNumero(hora.getHours());
  // const minutos = formatarNumero(hora.getMinutes());

  return (
    <Main>
       {/* <div className="relogio">
      <h1>Relógio React</h1>
      <p>{`${horas}:${minutos}`}</p>
    </div> */}

      <Logo>
        <img src={logo} alt="Logo da Labeddit" />
        <p>O projeto de rede social da Labenu</p>
      </Logo>
      <Form>
        <div className="input-container">
          <input type="email" value={email} onChange={handleEmailChange} />
          <label className={email ? 'active' : ''}>E-mail</label>
        </div>
        <div className="input-container">
          <input type="password" value={password} onChange={handlePasswordChange} />
          <label className={password ? 'active' : ''}>Senha</label>
        </div>
      </Form>
      <ButtonsContainer>
        <button className="ButtonContinue" onClick={() => goToPosts(navigate)}>Continuar</button>
        <ColoredLine />
        <button className="ButtonCreateCount" onClick={() => goToSignup(navigate)}>Criar uma conta!</button>
      </ButtonsContainer>
    </Main>
  );
}
