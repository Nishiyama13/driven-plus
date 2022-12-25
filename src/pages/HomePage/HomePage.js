import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import PlanContext from "../../contexts/PlanContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerLinks from "../../components/ContainerLinks";
import { ContainerHome } from "./styled";

export default function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(AuthContext);
  const { plan, setPlan } = useContext(PlanContext);
  const [perksPlanChoose, serPerksPlanChoose] = useState([]);

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

  function goToPlans() {
    navigate("/subscriptions");
  }
  return (
    <ContainerHome>
      <header>
        <img src={plan.image} alt={plan.name} />
        <img src={user.image} alt="" />
      </header>
      <h1>Olá, {user.name}</h1>
      {perksPlanChoose.map(p => (
        <ContainerLinks key={p.id} id={p.id} title={p.title} link={p.link} />
      ))}
      <button onClick={goToPlans}>Mudar Plano</button>
    </ContainerHome>
  );
}

//
