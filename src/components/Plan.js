import styled from "styled-components";
import { textColor } from "../constants/colors";

export default function Plan(props) {
  const { id, image, price } = props;
  function choosePlan() {
    alert(id);
  }
  return (
    <ContainerPlan onClick={choosePlan}>
      <img src={image} alt="Logo driven" />
      <Price>
        <span>R$</span> {price}
      </Price>
    </ContainerPlan>
  );
}

const ContainerPlan = styled.div`
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
