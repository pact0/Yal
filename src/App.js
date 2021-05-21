import React from "react";

import "./variables.css";
import styled from "@emotion/styled";
import WholePage from "./components/WholePage";
import * as Settings from "./settings/updateSettings";

const Wrap = styled.div`
  max-width: 1920px;
  height: 100%;
  position: relative;
  background: brown;
`;

const App = () => {
  //Apply colors
  const root = document.documentElement;
  const colors = Settings.Design.getWithFallback().colors;
  Object.keys(colors).forEach((key) => {
    root.style.setProperty(key, colors[key]);
  });

  return (
    <Wrap>
      <WholePage />
    </Wrap>
  );
};

export default App;
