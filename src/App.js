import React from "react";

import "./variables.css";
import styled from "@emotion/styled";
import Card from "./components/Card";
import * as Settings from "./settings/updateSettings";
import Picture from "./components/Picture";
import { useDispatch } from "react-redux";
import SettingsCard from "./components/Pages/Settings/SettingsCard";
const Wrap = styled.div`
  max-width: 1920px;
  height: 100%;
  position: relative;
  background: brown;
`;
const Container = styled.div`
  height: 240px;
  width: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const App = () => {
  //Apply colors
  const dispatch = useDispatch();
  const root = document.documentElement;
  const colors = Settings.Design.getWithFallback().colors;
  Object.keys(colors).forEach((key) => {
    root.style.setProperty(key, colors[key]);
  });

  return (
    <Wrap>
      {/* <div style={{ float: "right", margin: 10 }}>
        <CardSwitchButton
          value={7}
          clickHandler={(value) => dispatch(showPage(value))}
          style={{ float: "right" }}
        >
          <SettingsIcon />
        </CardSwitchButton>
      </div> */}

      <Container>
        <Picture />
        <Card />
      </Container>
      <SettingsCard />
    </Wrap>
  );
};

export default App;
