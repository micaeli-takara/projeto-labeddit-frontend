import {
    ContainerAutorization,
    Form,
    Main,
    TitleSignup,
    ButtonCreateCount,
    Heading,
  } from "./SignupStyle";
  import { useNavigate } from "react-router-dom";
  import { goToPosts } from "../../routes/coordinator";
  import axios from "axios";
  import useForm from "../../hooks/useForm";
  import { BASE_URL } from "../../constants/url";
  
  export default function SignupPage() {
    const navigate = useNavigate();
    const { form, onChange, cleanForm } = useForm({
      name: "",
      email: "",
      password: "",
    });
  
    const Signup = async (event) => {
    event.preventDefault();
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
        window.alert(error.response.data);
      }
    };
  
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
              <label className={form.password ? "active" : ""}>Senha</label>
            </div>
  
            <ContainerAutorization>
              <p className="TextAuthorization">
                Ao continuar, você concorda com o nosso
                <span> Contrato de usuário </span> e nossa
                <span> Política de Privacidade </span>
              </p>
              <div className="ContainerCheckbox">
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
        </Main>
      </div>
    );
  }
  