import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

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
  const { token, setToken } = useContext(AuthContext);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const tokenDes = JSON.parse(localStorage.getItem("token"));
    if (tokenDes) {
      setToken(tokenDes);

      const url = `${BASE_URL}/subscriptions/memberships`;

      const config = {
        headers: {
          Authorization: `Bearer ${tokenDes}`,
        },
      };

      const promise = axios.get(url, config);
      promise.then(res => {
        console.log(res);
        setPlans(res.data);
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

  const navigate = useNavigate();
  function goToPlan() {
    console.log(plans);
    navigate("/subscriptions/id");
  }

  return (
    <>
      <h1>PlansPage do(a): {user.name}</h1>
      <button onClick={goToPlan}>Plan</button>
    </>
  );
}
