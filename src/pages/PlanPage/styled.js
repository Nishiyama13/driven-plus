import styled from "styled-components";
import { mainColor, textColor } from "../../constants/colors";

export const ContainerBuy = styled.div`
  width: 100%;
  //background-color: blue;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  img {
    width: 140px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
