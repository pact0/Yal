import styled from "@emotion/styled/";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { PomodoroPage as Pomodoro } from "../../settings/updateSettings";
import useSound from "use-sound";
import alarm from "../../sounds/alarm.mp3";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 24px;
`;

const PomodoroPage = () => {
  const hidden = useSelector((state) => state.pages[3].show);
  const [minute, setMinute] = useState(Pomodoro.getCurrentMinutes() || 25);
  const [second, setSecond] = useState(Pomodoro.getCurrentSeconds() || 0);

  const [timerOn, setTimerOn] = useState(Pomodoro.getTimer() || false);

  const [timerDone, setTimerDone] = useState(true);

  const [sessionType, setSessionType] = useState("Work");

  const [play] = useSound(alarm);

  const toggleTimer = () => {
    Pomodoro.setTimer(!timerOn);
    setTimerOn(!timerOn);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn && sessionType === "Work") {
        clearInterval(interval);
        if (second === 0) {
          if (minute !== 0) {
            setSecond(59);
            Pomodoro.setCurrentMinutes(minute - 1);
            setMinute(minute - 1);
            Pomodoro.setCurrentSeconds(second);
          }
        } else {
          Pomodoro.setCurrentSeconds(second - 1);
          setSecond(second - 1);
        }
      }
    }, 1000);
    if (timerOn) {
      setTimerDone(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn, second, minute, sessionType]);

  useEffect(() => {
    if (second === 0 && minute === 0) {
      play();
      setTimerOn(false);
      setTimerDone(true);
      setSessionType((prevType) => {
        if (prevType === "Work") return "Break";
        if (prevType === "Break") return "Work";
      });
    }
  }, [second, minute, play]);

  useEffect(() => {
    if (sessionType === "Work" && minute === 0 && second === 0) {
      setMinute(Pomodoro.getWorkMinutes() || 25);
    }
    if (sessionType === "Break" && minute === 0 && second === 0) {
      setMinute(Pomodoro.getBreakMinutes() || 5);
    }
  }, [sessionType, timerDone, minute, second]);

  const timerMinutes = minute < 10 ? `0${minute}` : minute;
  const timerSeconds = second < 10 ? `0${second}` : second;

  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <React.Fragment>
        {hidden && (
          <Container>
            {/* <button onClick={() => clearInterval(interval)}>Pause</button>
            <button onClick={inter}>Start</button> */}
            <Button onClick={toggleTimer}>
              {timerMinutes} : {timerSeconds}
            </Button>
          </Container>
        )}
      </React.Fragment>
    </CSSTransition>
  );
};

export default PomodoroPage;
