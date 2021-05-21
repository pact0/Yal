import React from "react";
import CardSwitchButton from "./CardSwitchButton";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { showOne } from "../reducers/pagesReducer";

import AppsIcon from "@material-ui/icons/Apps";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import BallotIcon from "@material-ui/icons/Ballot";
const LightUp = styled.div`
  :hover {
    background: blue;
  }
`;
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
      <LightUp>
        <CardSwitchButton clickHandler={onClick} value={1}>
          <AppsIcon />
        </CardSwitchButton>
      </LightUp>
      <CardSwitchButton clickHandler={onClick} value={2}>
        <WbSunnyIcon />
      </CardSwitchButton>
      <CardSwitchButton clickHandler={onClick} value={3}>
        <BallotIcon />
      </CardSwitchButton>
    </Container>
  );
};

export default ButtonsOnLeft;
