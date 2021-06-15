import React from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./variables.css";
import styled from "@emotion/styled";
import Card from "./components/Card";
import * as Settings from "./settings/updateSettings";
import Picture from "./components/Picture";
import SettingsCard from "./components/Pages/Settings/SettingsCard";
import { useDispatch } from "react-redux";
import { showPage } from "./reducers/pagesReducer";
import CardSwitchButton from "./components/CardSwitchButton";
const Wrap = styled.div`
  max-width: 1920px;
  height: 100%;
  position: relative;
  background: --var(bg-color);
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
      <div style={{ float: "right", margin: 10 }}>
        <CardSwitchButton
          value={7}
          clickHandler={(value) => dispatch(showPage(value))}
          style={{ float: "right" }}
        >
          <FontAwesomeIcon icon={faCog} />
        </CardSwitchButton>
      </div>

      <Container>
        <Picture />
        <Card />
      </Container>
      <SettingsCard />
    </Wrap>
  );
};

export default App;
