import { useState } from "react";
import {
  ContainerAutorization,
  Form,
  Main,
  TitleSignup,
  ButtonCreateCount,
  Heading,
} from "./SignupPageStyle";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  axios.post(`${BASE_URL}/users/signup`, body);

  return (
    <div>
      <Main>
        <div>
          <TitleSignup>
            <strong>
              Olá, boas vindas ao <Heading>LabEddit!</Heading>
            </strong>
          </TitleSignup>
        </div>
        <Form>
          <div className="input-container">
            <input type="name" value={name} onChange={handleNameChange} />
            <label className={name ? "active" : ""}>Apelido</label>
          </div>
          <div className="input-container">
            <input type="email" value={email} onChange={handleEmailChange} />
            <label className={email ? "active" : ""}>E-mail</label>
          </div>
          <div className="input-container">
            <input type="password" value={password} onChange={handlePasswordChange} />
            <label className={password ? "active" : ""}>Senha</label>
          </div>
        </Form>
        <ContainerAutorization>
          <p className="TextAuthorization">
            Ao continuar, você concorda com o nosso
            <span> Contrato de usuário </span> e nossa
            <span> Política de Privacidade </span>
          </p>
          <div className="ContainerCheckbox">
            <input type="checkbox" />
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </div>
        </ContainerAutorization>
        <ButtonCreateCount onClick={() => goToLogin(navigate)}>Cadastrar</ButtonCreateCount>
      </Main>
    </div>
  );
}
