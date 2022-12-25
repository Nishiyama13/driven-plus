import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import PlanContext from "../../contexts/PlanContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(AuthContext);
  const { plan, setPlan } = useContext(PlanContext);

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
    }
  }, []);

  function goToPlans() {
    navigate("/subscriptions");
  }
  return (
    <>
      <h1>HomePage do(a): {user.name}</h1>
      <h1>HomePage token: {token}</h1>
      <h1>Plano pago: {plan.id}</h1>
      <button onClick={goToPlans}>Go to PlansPage</button>
    </>
  );
}

//
