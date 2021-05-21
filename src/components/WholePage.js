import React, { useState } from "react";
import MainPage from "./Pages/MainPage";
import styled from "@emotion/styled";
import ButtonsOnLeft from "./ButtonsOnLeft";
import ButtonsOnRight from "./ButtonsOnRight";
import WeatherPage from "./Pages/WeatherPage";
import ToDoPage from "./Pages/ToDoPage";
import PomodoroPage from "./Pages/PomodoroPage";
import AnaliticsPage from "./Pages/AnaliticsPage";
import FluffPage from "./Pages/FluffPage";

const Container = styled.div`
  height: 240px;
  width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardWrap = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px 10px;
  box-shadow: 0px 2px 25px var(--card-shadow-color);
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const WholePage = () => {
  return (
    <Container>
      <ButtonsOnLeft />
      <CardWrap>
        <MainPage />
        <WeatherPage />
        <ToDoPage />
        <PomodoroPage />
        <AnaliticsPage />
        <FluffPage />
      </CardWrap>
      <ButtonsOnRight />
    </Container>
  );
};

export default WholePage;
