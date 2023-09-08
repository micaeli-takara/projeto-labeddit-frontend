import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToPosts } from "../../routes/coordinator";

export default function LoginPage() {

    const navigate = useNavigate();
    const { form, onChange, cleanForm } = useForm({
        email: "",
        password: "",
    });

    const Login = async (event) => {
        event.preventDefault();
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
            console.error(error?.response?.data);
            window.alert(error?.response?.data)
        }
    };

    return (
        <div>
            <form onSubmit={Login}>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button
                    type="submit"
                >
                    Continuar
                </button>
            </form>
        </div>
    )
}