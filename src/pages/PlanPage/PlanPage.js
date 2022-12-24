import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { ContainerBuy } from "./styled";
import PlanDescription from "../../components/PlanDescription";
import BuyForm from "../../components/BuyForm";

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
  //const {Plan, setPlan} = useContext(PlanContext)
  const navigate = useNavigate();
  const { idPlan } = useParams();

  const [planData, setPlanData] = useState(undefined);
  const [perks, setPerks] = useState([]);

  useEffect(() => {
    const tokenDes = JSON.parse(localStorage.getItem("token"));
    if (tokenDes) {
      setToken(tokenDes);

      const urlPlan = `${BASE_URL}/subscriptions/memberships/${idPlan}`;
      console.log(idPlan);

      const config = {
        headers: {
          Authorization: `Bearer ${tokenDes}`,
        },
      };

      const promise = axios.get(urlPlan, config);
      promise.then(res => {
        console.log(res);
        setPlanData(res.data);
        // const planChooseData = { ...res.data };
        // console.log(planChooseData);
        setPerks(res.data.perks);
      });
      promise.catch(err => console.log(err.response.data));
    }
  }, []);

  useEffect(() => {
    const userDes = JSON.parse(localStorage.getItem("user"));
    if (userDes) {
      setUser(userDes);
    }
  }, []);

  if (planData === undefined) {
    return <div>Carregando...</div>;
  }

  function goToHome() {
    navigate("/home");
  }

  return (
    <ContainerBuy>
      <img src={planData.image} alt={planData.name} />
      <h1>{planData.name}</h1>
      <div>
        <h2>Benefícios:</h2>

        {perks.map(p => (
          <PlanDescription key={p.id} id={p.id} title={p.title} link={p.link} />
        ))}
        <h2>Preço:</h2>
        <p>
          <span>R$ </span>
          {planData.price} <span>cobrados mensalmente</span>
        </p>
        <BuyForm />
      </div>
      <button onClick={goToHome}>Home</button>
    </ContainerBuy>
  );
}
