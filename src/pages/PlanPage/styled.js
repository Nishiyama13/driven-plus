import styled from "styled-components";
import { textColor } from "../../constants/colors";

export const ContainerBuy = styled.div`
  width: 100%;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  header {
    position: fixed;
    top: 25px;
    left: 22px;

    img {
      width: 28px;
    }
  }

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
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ContainerInfo = styled.div`
  img {
    width: 15px;
    margin-top: 12px;
    margin-right: 5px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
// margin-top: 12px;
// margin-bottom: 5px;
