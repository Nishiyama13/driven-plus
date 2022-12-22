//import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Listar planos: GET com um cabeçalho Authorization com formato Bearer TOKEN
//https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships
/*resposta
[
    {
        "id": 1,
        "image": "https://svgshare.com/i/dSP.svg",
        "price": "39.99"
    },
    ...
]
*/

export default function PlansPage() {
  const navigate = useNavigate();
  function goToPlan() {
    navigate("/subscriptions/id");
  }

  const { user } = useContext(UserContext);
  return (
    <>
      <h1>PlansPage do(a): {user.name}</h1>
      <button onClick={goToPlan}>Plan</button>
    </>
  );
}
