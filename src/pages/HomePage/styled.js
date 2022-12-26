import styled from "styled-components";
import { mainColor, textColor, cancelColor } from "../../constants/colors";

export const ContainerHome = styled.div`
  width: 100%;

  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  padding-top: 95px;

  h1 {
    padding-bottom: 54px;

    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Header = styled.div`
  width: 34px;
  border-radius: 30px;
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 1;
`;

export const PlanImg = styled.img`
  height: 50px;
  width: 75px;
  position: fixed;
  top: 32px;
  left: 48px;
  z-index: 1;
`;
export const Footer = styled.div`
  width: 100%;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  button {
    height: 52px;
    width: 299px;

    border-radius: 8px;
    border: none;
    color: ${textColor};
    margin-bottom: 12px;
  }
`;

export const ChangePlanButton = styled.button`
  background-color: ${mainColor};
`;
export const CancelButton = styled.button`
  background-color: ${cancelColor};
`;
