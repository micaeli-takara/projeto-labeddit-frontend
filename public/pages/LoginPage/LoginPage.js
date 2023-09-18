import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToPosts, goToSignup } from "../../routes/coordinator";
import {
    ButtonsContainer,
    ColoredLine,
    Form,
    FullScreenWrapper,
    Logo,
    Main,
} from "./LoginStyle";
import logo from "../../assets/LogoLabeddit.svg";
import { useState } from "react";
import Loading from "../../components/Loading/LoadingPage/Loading";

export default function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { form, onChange, cleanForm } = useForm({
        email: "",
        password: "",
    });

    const Login = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const body = {
                email: form.email,
                password: form.password
            }
            const response = await axios.post(`${BASE_URL}/users/login`, body);
            window.localStorage.setItem("token", response.data.output.token)
            cleanForm();
            goToPosts(navigate)

        } catch (error) {
            setIsLoading(false);
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
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
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            required
                        />
                        <label className={form.password ? "active" : ""}>Senha</label>
                    </div>
                    <ButtonsContainer>
                        <button
                            type="submit"
                            className="button-continue"
                        >
                            Continuar
                        </button>
                        <ColoredLine />
                        <button
                            className="button-create"
                            onClick={() => goToSignup(navigate)}
                        >
                            Criar uma conta!
                        </button>
                    </ButtonsContainer>
                </Form>
            </Main>
        </>
    )
}