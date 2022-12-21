import styled from "styled-components";
//import { secondColor } from "../../constants/colors"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  .img {
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 45px;
    width: 300px;
    border-radius: 5px;

    border-style: none;
    font-family: "Lexend Deca";
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    color: #ffff;
  }
`;
