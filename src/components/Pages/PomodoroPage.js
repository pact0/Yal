import styled from "@emotion/styled/";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

const BoopButton = () => {
  const [play] = useSound(alarm);

  return <button onClick={play}>Boop!</button>;
};

const PomodoroPage = () => {
  const hidden = useSelector((state) => state.pages[3].show);
  const [minute, setMinute] = useState(Pomodoro.getMinutes() || 25);
  const [second, setSecond] = useState(Pomodoro.getSeconds() || 0);

  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(true);

  const [sessionType, setSessionType] = useState("Work");

  const [play] = useSound(alarm);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        clearInterval(interval);
        if (second === 0) {
          if (minute !== 0) {
            setSecond(59);
            setMinute(minute - 1);
          } else {
            let minute = 24;
            let second = 59;

            setSecond(second);
            setMinute(minute);
          }
        } else {
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
  }, [timerOn, second]);

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
  }, [second]);

  useEffect(() => {
    if (sessionType === "Work") {
      setMinute(Pomodoro.getMinutes() || 25);
    }
    if (sessionType === "Break") {
      setMinute(Pomodoro.getBreakMinutes() || 5);
    }
  }, [sessionType, timerDone]);

  const timerMinutes = minute < 10 ? `0${minute}` : minute;
  const timerSeconds = second < 10 ? `0${second}` : second;

  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <>
        {hidden && (
          <Container>
            {timerMinutes} : {timerSeconds}
            {/* <button onClick={() => clearInterval(interval)}>Pause</button>
            <button onClick={inter}>Start</button> */}
            <button onClick={() => setTimerOn(!timerOn)}>toggle</button>
            <BoopButton>sound</BoopButton>
          </Container>
        )}
      </>
    </CSSTransition>
  );
};

export default PomodoroPage;
