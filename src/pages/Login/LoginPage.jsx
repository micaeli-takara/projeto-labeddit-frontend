import logo from "../../assets/LogoLabeddit.svg";
import {
  ButtonsContainer,
  ColoredLine,
  Form,
  Logo,
  Main,
} from "./LoginPageStyle";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/use-form";
import { goToPosts } from "../../routes/coordinator";
import { BASE_URL} from "../../constants/url";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanForm } = useForm({
    email: "",
    password: "",
  });

  const Login = async (event) => {
    event.preventDefault();
    cleanForm();
    try {
      const body = {
        email: form.email,
        password: form.password
      }

      await axios.post(`${BASE_URL}/users/login`, body);
      // window.localStorage.setItem(TOKEN_NAME, response.data.token)
      goToPosts(navigate)
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <Main>
      <Logo>
        <img src={logo} alt="Logo da Labeddit" />
        <p>O projeto de rede social da Labenu</p>
      </Logo>
      <Form onSubmit={Login}>
        <div className="input-container">
          <input
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
            name="password"
            type="urrent-password"
            value={form.password}
            onChange={onChange}
            required
          />
          <label className={form.password ? "active" : ""}>Senha</label>
        </div>
        <ButtonsContainer>
          <button
            className="ButtonContinue"
          >
            Continuar
          </button>
          <ColoredLine />
          {/* <button
            className="ButtonCreateCount"
            onClick={() => goToSignup(navigate)}
          >
            Criar uma conta!
          </button> */}
        </ButtonsContainer>
      </Form>
    </Main>
  );
}
