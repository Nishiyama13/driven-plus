import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import PlanContext from "../../contexts/PlanContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerLinks from "../../components/ContainerLinks";
import {
  ContainerHome,
  Header,
  PlanImg,
  Footer,
  CancelButton,
  ChangePlanButton,
} from "./styled";
import userImgBase from "../../assets/userImgBase.png";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(AuthContext);
  const { plan, setPlan } = useContext(PlanContext);
  const [perksPlanChoose, serPerksPlanChoose] = useState(undefined);

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

  useEffect(() => {
    const planDes = JSON.parse(localStorage.getItem("plan"));
    if (planDes) {
      setPlan(planDes);
      serPerksPlanChoose(planDes.perks);
    }
  }, []);

  if (perksPlanChoose === undefined) {
    return <div>Carregando...</div>;
  }

  function goToPlans() {
    navigate("/subscriptions");
  }

  function cancelPlan() {
    alert("Fazer logica de cancelamento");
    const urlCancelPlan = `${BASE_URL}/subscriptions`;
    console.log(urlCancelPlan);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(urlCancelPlan, config);
    promise.then(res => {
      console.log(res.data);

      setPlan(res.data);
      alert("Cancelamento Realizado");
      navigate("/subscriptions");
    });
    promise.catch(err => console.log(err.response.data));
  }

  return (
    <ContainerHome>
      <Header>
        <img src={userImgBase} alt="imagem do usuario" />
      </Header>
      <PlanImg src={plan.image} alt={plan.name} />
      <h1>Olá, {user.name}</h1>
      {perksPlanChoose.map(p => (
        <ContainerLinks key={p.id} id={p.id} title={p.title} link={p.link} />
      ))}
      <Footer>
        <ChangePlanButton onClick={goToPlans}>Mudar Plano</ChangePlanButton>
        <CancelButton onClick={cancelPlan}>Cancelar Plano</CancelButton>
      </Footer>
    </ContainerHome>
  );
}
