import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//listar um plano específico, GET cabeçalho Authorization no formato Bearer TOKEN
//https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/ID_DO_PLANO
//responde:
/*{
    "id": 1,
    "name": "Driven Plus",
    "image": "https://svgshare.com/i/dSP.svg",
    "price": "39.99",
    "perks": [
        {
            "id": 1,
            "membershipId": 1,
            "title": "Solicitar brindes",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            "id": 2,
            "membershipId": 1,
            "title": "Materiais bônus de web",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ]
}*/

//Assinar um plano, POST:
//https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions
//ENVIAR no formato, com cabeçalho Authorization com formato Bearer TOKEN
/*{
    membershipId: 1,
    cardName: "Fulano Da Silva",
    cardNumber: "1234 1234 1234 1234",
    securityNumber: 123,
    expirationDate: "01/28"
}*/

//Resposta do servidor
/*{
    "id": 1,
    "name": "Driven Plus",
    "image": "https://svgshare.com/i/dSP.svg",
    "price": "39.99",
    "perks": [
        {
            "id": 1,
            "membershipId": 1,
            "title": "Solicitar brindes",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            "id": 2,
            "membershipId": 1,
            "title": "Materiais bônus de web",
            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ]
}*/

export default function PlanPage() {
  const { user, setUser } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const tokenDes = JSON.parse(localStorage.getItem("token"));
    if (tokenDes) {
      setToken(tokenDes);
    }
  }, []);

  useEffect(() => {
    const userDes = JSON.parse(localStorage.getItem("user"));
    if (userDes) {
      setUser(userDes);
    }
  }, []);

  const navigate = useNavigate();

  function goToHome() {
    navigate("/home");
  }

  return (
    <>
      <h1>PlanPage do(a): {user.name}</h1>
      <button onClick={goToHome}>Home</button>
    </>
  );
}
