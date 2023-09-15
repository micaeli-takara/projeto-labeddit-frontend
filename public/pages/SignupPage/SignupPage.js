import {
  ContainerAutorization,
  Form,
  Main,
  TitleSignup,
  ButtonCreateCount,
  Heading,
  FullScreenWrapper
} from "./SignupStyle";
import { useNavigate } from "react-router-dom";
import { goToPosts } from "../../routes/coordinator";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/url";
import { useState } from "react";
import Attachment from "../../assets/Attachment.svg";
import Loading from "../../components/Loading/Loading";

export default function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChange, cleanForm, validateForm, errors } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const Signup = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      try {
        const body = {
          name: form.name,
          email: form.email,
          password: form.password,
        };

        const response = await axios.post(`${BASE_URL}/users/signup`, body);
        window.localStorage.setItem("token", response.data.output.token);
        cleanForm();
        goToPosts(navigate);

      } catch (error) {
        console.error(error.response.data);
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && (
        <FullScreenWrapper>
          <Loading />
        </FullScreenWrapper>
      )}
      <Main>
        <div>
          <TitleSignup>
            <strong>
              Olá, boas vindas ao <Heading>LabEddit!</Heading>
            </strong>
          </TitleSignup>
        </div>
        <Form onSubmit={Signup}>
          <div className="input-container">
            <input
              className="input"
              name="name"
              type="name"
              value={form.name}
              onChange={onChange}
              required
            />
            <label className={form.name ? "active" : ""}>Apelido</label>
            <p className="error-message">{errors.name}</p>
          </div>
          <div className="input-container">
            <input
              className="input"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
            <label className={form.email ? "active" : ""}>E-mail</label>
          </div>
          <div className="input-container">
            <input
              className="input"
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              required
            />

            <div className="password-content">
              <label className={form.password ? "active" : ""}>Senha</label>
              <img src={Attachment} alt="Sua senha deve conter..." />
              <p className="password-message">A senha deve conter no mínimo 7 caracteres, sendo uma letra maiúscula, uma minúscula, um número e um caractere especial</p>
            </div>
            <p className="error-message">{errors.password}</p>
          </div>
          <ContainerAutorization>
            <p>
              Ao continuar, você concorda com o nosso
              <span> Contrato de usuário </span> e nossa
              <span> Política de Privacidade </span>
            </p>
            <div className="container-checkbox">
              <input className="checkbox" type="checkbox" />
              <p>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </p>
            </div>
          </ContainerAutorization>
          <ButtonCreateCount>
            Cadastrar
          </ButtonCreateCount>
        </Form>
        {isLoading && <Loading />}
      </Main>
    </>
  );
}
