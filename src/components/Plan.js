import styled from "styled-components";
import { textColor } from "../constants/colors";
// https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/ID_DO_PLANO
import { Link } from "react-router-dom"; //useParams

//import PlanContext from "../../contexts/PlanContext";
//import { useContext } from "react";

export default function Plan(props) {
  const { id, image, price } = props;
  console.log(id, image, price);
  //const { setPlan } = useContext(PlanContext);

  // useEffect(() => {
  //   const planDes = JSON.parse(localStorage.getItem("plan"));
  //   if (planDes) {
  //     setUser(planDes);
  //   }
  // }, []);

  function choosePlan() {
    alert(id);
  }
  return (
    <ContainerPlan onClick={choosePlan} to={`/subscriptions/${id}`}>
      <img src={image} alt="Logo driven" />
      <Price>
        <span>R$</span> {price}
      </Price>
    </ContainerPlan>
  );
}

const ContainerPlan = styled(Link)`
  display: flex;
  width: 80%;

  height: 180px;
  border-radius: 12px;

  margin-top: 10px;

  border: 3px solid #7e7e7e;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: ${textColor};
  padding-bottom: 10px;
`;

/*{price.toFixed(2).replace(".", ",")}*/
