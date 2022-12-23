import styled from "styled-components";
import { textColor } from "../../constants/colors";

export const ContainerPlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  h1 {
    height: 38px;
    width: 263px;

    color: ${textColor};
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
