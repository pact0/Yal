import React from "react";
import CardSwitchButton from "./CardSwitchButton";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { showOne } from "../reducers/pagesReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faListAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsOnRight = (clickHandler) => {
  const dispatch = useDispatch();
  const onClick = (value) => {
    dispatch(showOne(value));
  };

  return (
    <Container>
      <CardSwitchButton clickHandler={onClick} value={4}>
        <FontAwesomeIcon icon={faStopwatch} />
      </CardSwitchButton>
      <CardSwitchButton clickHandler={onClick} value={3}>
        <FontAwesomeIcon icon={faListAlt} />
      </CardSwitchButton>
    </Container>
  );
};

export default ButtonsOnRight;
