import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
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
  function goToPlan() {
    navigate("/subscriptions/id");
  }

  return (
    <>
      <h1>PlansPage do(a): {user.name}</h1>
      <button onClick={goToPlan}>Plan</button>
    </>
  );
}
