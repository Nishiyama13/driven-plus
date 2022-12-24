import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import styled from "styled-components";
import { mainColor } from "../constants/colors";

//import styled from "styled-components";
//body
// {
//   membershipId: 1,
//   cardName: "Fulano Da Silva",
//   cardNumber: "1234 1234 1234 1234",
//   securityNumber: 123,
//   expirationDate: "01/28"
// }
export default function BuyForm() {
  const [membershipId, setMembershipId] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [formattingTip, setFormattingTip] = useState(false);
  const navigate = useNavigate();

  function ConfirmPurchase(e) {
    e.preventDefault();
    const urlBuy = `${BASE_URL}/subscriptions`;
    //const body = { email, name, cpf, password };
    const body = {
      membershipId,
      cardName,
      cardNumber,
      securityNumber,
      expirationDate,
    };
    console.log(urlBuy);
    console.log(body);

    // const promise = axios.post(urlBuy, body);
    // promise.then(res => {
    //   alert("Compra Realizada");
    //   navigate("/home");
    // });
    // promise.catch(err => console.log(err.response.data));
  }

  const handleKeyPress = event => {
    const { target, key } = event;
    const value = target.value;

    // Adiciona um espaço após cada quarto dígito
    if (key === "Backspace") {
      target.value = value.slice(0, -1);
    } else {
      const cursorPosition = target.selectionStart;
      const newValue = `${value.slice(0, cursorPosition)}${key}${value.slice(
        cursorPosition
      )}`;

      if (newValue.length === 20) {
        return;
      } else {
        if (
          newValue.length === 4 ||
          newValue.length === 9 ||
          newValue.length === 14
        ) {
          target.value = `${newValue} `;
        } else {
          target.value = newValue;
        }
      }
    }

    setCardNumber(event.target.value);
  };

  return (
    <CardForm onSubmit={ConfirmPurchase}>
      <input
        type="text"
        placeholder="Nome impresso no cartão"
        value={cardName}
        onChange={e => setCardName(e.target.value)}
        required
      />

      <input
        type="text"
        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
        maxLength="19"
        placeholder="Digitos do cartão"
        value={cardNumber}
        onKeyPress={handleKeyPress}
        required
      />
      <MiniInput>
        <input
          type="text"
          pattern="[0-9]{3}"
          maxLength="3"
          placeholder="Código de segurança"
          value={securityNumber}
          onChange={e => setSecurityNumber(e.target.value)}
          required
        />
        <input
          type="text"
          pattern="[0-9]{2}/[0-9]{2}"
          maxLength="5"
          min="2023-01-01"
          placeholder="Validade"
          title="Insira a data no formato mm/yy, por exemplo: 01/23 para janeiro de 2023"
          onTouchStart={() => setFormattingTip(true)}
          onTouchEnd={() => setFormattingTip(false)}
          value={expirationDate}
          onChange={e => setExpirationDate(e.target.value)}
          required
        />
        <StyledDialog open={formattingTip}>mm/yy</StyledDialog>
      </MiniInput>
      <ButtonSign type="submit">Assinar</ButtonSign>
    </CardForm>
  );
}

const CardForm = styled.form`
  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    // padding-left: 14px;
  }
`;
const MiniInput = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 145px;
  }
`;
const ButtonSign = styled.button`
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
  color: #ffff;
  background: ${mainColor};
`;
const StyledDialog = styled.dialog`
  height: 10px;
  width: 50px;
  background: ${mainColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 60px;
  margin-right: 60px;
  border-radius: 5px;
`;
