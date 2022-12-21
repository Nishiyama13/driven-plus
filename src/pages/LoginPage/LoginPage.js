import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";//useNavigate
import { LoginContainer, FormContainer } from "./styled";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import logo from "../../assets/logo.png";

//navigate("/home");

export default function LoginPage() {
    //const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    function login(e) {
        e.preventDefault();
        const url = `${BASE_URL}/auth/login`;
        const body = { email, password };
        console.log(body);

        const promise = axios.post(url, body);
        promise.then(res => {
            console.log(res);
            setUser({
                id: res.data.id,
                name: res.data.name,
                cpf: res.data.cpf,
                email: res.data.email,
            });
            setToken(res.data.token);
            alert("usuario econectado!")
        });
        promise.catch(err => alert(err.response.data.message));
    }

    return (
        <LoginContainer>
            <img src={logo} />
            <FormContainer>
                <form onSubmit={login}>
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Entrar</button>
                </form>
                <Link to="/sign-up">Não possui uma conta? Cadastre-se</Link>
            </FormContainer>
        </LoginContainer>
    )
}