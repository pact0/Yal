import React from "react";
import CardSwitchButton from "./CardSwitchButton";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { showOne } from "../reducers/pagesReducer";
import AppsIcon from "@material-ui/icons/Apps";
import BarChartIcon from "@material-ui/icons/BarChart";
import BathtubIcon from "@material-ui/icons/Bathtub";
import TimerIcon from "@material-ui/icons/Timer";
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
        <TimerIcon />
      </CardSwitchButton>
      <CardSwitchButton clickHandler={onClick} value={5}>
        <BarChartIcon />
      </CardSwitchButton>
      <CardSwitchButton clickHandler={onClick} value={6}>
        <BathtubIcon />
      </CardSwitchButton>
    </Container>
  );
};

export default ButtonsOnRight;
