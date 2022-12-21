import styled from "styled-components";
import { mainColor } from "../../constants/colors"

export const ContainerSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  
`;

export const Button = styled.button`
  height: 45px;
  width: 100%;
  border-radius: 5px;

  border-style: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 24px;
  background-color: #52b6ff;
  color: #ffff;
  background: ${mainColor};


`;