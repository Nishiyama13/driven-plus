import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContainerSignUp, Button } from "./styled";
import axios from "axios";
import logo from "../../assets/logo.png";

/*{
	email: "fulano@email.com",
	name: "Fulano",
	cpf: "111.111.111-11",
	password: "123"
}
*/
export default function SingUpPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [membership, setMemberchip] = useState({});
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        const URL =
            "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        const body = { email, name, cpf, password };

        const promise = axios.post(URL, body);
        promise.then(res => {
            alert("Cadastro Realizado");
            navigate("/");
        });
        promise.catch(err => console.log(err.response.data));
    }
    return (
        <ContainerSignUp>
            <img src={logo} />

            <form onSubmit={createAccount}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />

                <Button type="submit">Cadastrar</Button>
            </form>
            <Link to="/">Já possui uma conta? Faça login</Link>
        </ContainerSignUp>
    );
}
