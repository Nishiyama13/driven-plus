import styled from "styled-components";
import { textColor } from "../constants/colors";

export default function PlanDescription(props) {
  const { title, link } = props; //key, id,
  return (
    <Item>
      <a href={link}>{title}</a>
    </Item>
  );
}
//

const Item = styled.li`
  list-style: decimal;
  color: ${textColor};

  a {
    color: ${textColor};
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
