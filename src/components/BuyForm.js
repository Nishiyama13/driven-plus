import PlanContext from "../contexts/PlanContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import styled from "styled-components";
import { mainColor, textColor } from "../constants/colors";
import { Modal, Button } from "react-bootstrap";

//import styled from "styled-components";
//body
// {
//   membershipId: 1,
//   cardName: "Fulano Da Silva",
//   cardNumber: "1234 1234 1234 1234",
//   securityNumber: 123,
//   expirationDate: "01/28"
// }
export default function BuyForm(props) {
  const { membershipId, price, planName } = props;
  const { plan, setPlan } = useContext(PlanContext);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [formattingTip, setFormattingTip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // console.log(membershipId);

  function ConfirmPurchase(e) {
    e.preventDefault();

    alert("colocar pagina de confirmacao");
    setShowModal(true);
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

  function handleConfirmPurchase() {
    const tokenDes = JSON.parse(localStorage.getItem("token"));
    const urlBuy = `${BASE_URL}/subscriptions`;
    const body = {
      membershipId,
      cardName,
      cardNumber,
      securityNumber,
      expirationDate,
    };
    console.log(urlBuy);
    console.log(body);

    const config = {
      headers: {
        Authorization: `Bearer ${tokenDes}`,
      },
    };

    const promise = axios.post(urlBuy, body, config);
    promise.then(res => {
      console.log(res.data);

      navigate("/home");
      setPlan(res.data.membership);
      alert("Compra Realizada");
    });
    promise.catch(err => console.log(err.response.data));

    setShowModal(false);
  }

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

      <ContainerModal
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <ModalHeader>
          <button onClick={() => setShowModal(false)}>X</button>
        </ModalHeader>
        <Modal.Body>
          <h1>
            Tem certeza que deseja assinar o plano {planName} (R$ {price}?)
          </h1>
        </Modal.Body>
        <ModalFooter>
          <NoButton variant="secondary" onClick={() => setShowModal(false)}>
            Nāo
          </NoButton>
          <YesButton variant="primary" onClick={handleConfirmPurchase}>
            Sim
          </YesButton>
        </ModalFooter>
      </ContainerModal>
      {showModal && <Backdrop />}
    </CardForm>
  );
}

const CardForm = styled.form`
  margin-top: 34px;
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
const ContainerModal = styled(Modal)`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  position: fixed;
  top: 230px;
  left: 16%;
  height: 210px;
  width: 248px;
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border-radius: 12px;
  }
`;

const ModalHeader = styled(Modal.Header)`
  position: fixed;
  top: 25px;
  right: 20px;
  button {
    font-weight: 700;
  }
`;

const ModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: space-between;
  padding-top: 47px;
  button {
    height: 52px;
    width: 95px;
    border-radius: 8px;
    color: ${textColor};
    border: none;
  }
`;

const NoButton = styled.button`
  background-color #CECECE;
`;

const YesButton = styled.button`
  background-color: ${mainColor};
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 0;
  opacity: 0.5;
`;
