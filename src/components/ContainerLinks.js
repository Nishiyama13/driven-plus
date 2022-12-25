import styled from "styled-components";
import { mainColor, textColor } from "../constants/colors";
export default function ContainerLinks(props) {
  const { title, link } = props; //key, id,
  return (
    <Item>
      <a href={link}>{title}</a>
    </Item>
  );
}

const Item = styled.div`
  height: 52px;
  width: 299px;

  border-radius: 8px;
  color: ${textColor};
  background-color: ${mainColor};
  display: flex;

  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  a {
    color: ${textColor};
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
  }
`;
