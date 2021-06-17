import styled from "@emotion/styled/";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { hidePage } from "../../../reducers/pagesReducer";
import { showOneSetting } from "../../../reducers/settingsReducer";
import CardSwitchButton from "../../CardSwitchButton";

import AnaliticsCard from "./AnaliticsCard";
import AppearanceCard from "./AppearanceCard";
import PomodoroCard from "./PomodoroCard";
import WeatherCard from "./WeatherCard";

const Box = styled.div`
  height: 450px;
  width: 830px;
  position: absolute;
  top: 50%;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: var(--card-color);
  box-shadow: 0px 2px 25px var(--card-shadow-color);
  border-radius: 15px;
  opacity: 0.95;
`;
const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
`;
const Button = styled.button`
  width: 110px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text);
  font-size: 16px;
  text-align: center;
`;
const SettingsCard = () => {
  const hidden = useSelector((state) => state.pages[6].show);
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.settingsPages));
  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <React.Fragment>
        {hidden && (
          <Box className="BOX">
            <Container>
              <Nav>
                <Button onClick={() => dispatch(showOneSetting(1))}>
                  Appearance
                </Button>
                <Button onClick={() => dispatch(showOneSetting(2))}>
                  Weather
                </Button>
                <Button onClick={() => dispatch(showOneSetting(3))}>
                  Pomodoro
                </Button>
                <Button onClick={() => dispatch(showOneSetting(4))}>
                  Analitics
                </Button>
                <CardSwitchButton
                  value={7}
                  clickHandler={() => dispatch(hidePage(7))}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </CardSwitchButton>
              </Nav>

              <div style={{ border: "1px var(--text) solid" }}></div>
              <AppearanceCard />
              <AnaliticsCard />
              <PomodoroCard />
              <WeatherCard />
            </Container>
          </Box>
        )}
      </React.Fragment>
    </CSSTransition>
  );
};

export default SettingsCard;
