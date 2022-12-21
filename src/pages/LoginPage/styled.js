import styled from "styled-components";
import { mainColor } from "../../constants/colors"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 45px;
    width: 100%;
    border-radius: 5px;

    border-style: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 14 24px;
    color: #ffff;
    background: ${mainColor};
    margin-top: 14px;
    margin-bottom: 24px;
  }
`;
