import styled from "@emotion/styled/";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import { hidePage } from "../../../reducers/pagesReducer";
import { showOneSetting } from "../../../reducers/settingsReducer";
import CloseIcon from "@material-ui/icons/Close";
import AppearanceCard from "./AppearanceCard";
import WeatherCard from "./WeatherCard";
import PomodoroCard from "./PomodoroCard";
import AnaliticsCard from "./AnaliticsCard";
const Box = styled.div`
  height: 450px;
  width: 830px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: black;
  opacity: 0.9;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 10px;
`;
const Button = styled.button`
  width: 110px;
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
          <Box>
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
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => dispatch(hidePage(7))}
                >
                  <CloseIcon />
                </IconButton>
              </Nav>
              <AppearanceCard />
              <WeatherCard />
              <PomodoroCard />
              <AnaliticsCard />
            </Container>
          </Box>
        )}
      </React.Fragment>
    </CSSTransition>
  );
};

export default SettingsCard;
