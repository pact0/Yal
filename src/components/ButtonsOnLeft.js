import React from "react";
import CardSwitchButton from "./CardSwitchButton";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { showOne } from "../reducers/pagesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMoon } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsOnLeft = (clickHandler) => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(showOne(value));
  };

  return (
    <Container>
      <CardSwitchButton clickHandler={onClick} value={1}>
        <FontAwesomeIcon icon={faHome} />
      </CardSwitchButton>
      <CardSwitchButton clickHandler={onClick} value={2}>
        <FontAwesomeIcon icon={faMoon} />
      </CardSwitchButton>
    </Container>
  );
};

export default ButtonsOnLeft;
