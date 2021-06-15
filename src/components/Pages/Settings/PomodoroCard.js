import styled from "@emotion/styled";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PomodoroPage as Pomodoro } from "../../../settings/updateSettings";

const Input = styled.input`
  color: var(--accent-color);
  background: transparent;
  border: none;
  text-align: center;
  caret-color: var(--accent-color2);
  :focus {
    animation: text-flicker 4s ease-out 0s infinite normal;
    animation: box-flicker 4s ease-out 0s infinite normal;
    outline: none;
  }
  margin: 10px 0px;
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  alig-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  color: var(--accent-color);
  padding: 10px 0px;
`;

const PomodoroCard = () => {
  const hidden = useSelector((state) => state.settingsPages[2].show);

  const [minutesWork, setMinutesWork] = useState("");
  const [secondsWork, setSecondsWork] = useState("");

  const [minutesBreak, setMinutesBreak] = useState("");
  const [secondsBreak, setSecondsBreak] = useState("");

  const setWeatherData = (e) => {
    e.preventDefault();
    Pomodoro.setMinutes(minutesWork);
    Pomodoro.setSeconds(secondsWork);
  };

  return (
    <div>
      {hidden && (
        <div>
          Change your pomodoro settings
          <Form onSubmit={setWeatherData}>
            Work
            <Input
              type="text"
              placeholder="Minutes"
              value={minutesWork}
              onChange={(e) => setMinutesWork(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Seconds"
              value={secondsWork}
              onChange={(e) => setSecondsWork(e.target.value)}
            />
            Break
            <Input
              type="text"
              placeholder="Minutes"
              value={minutesBreak}
              onChange={(e) => setMinutesBreak(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Seconds"
              value={secondsBreak}
              onChange={(e) => setSecondsBreak(e.target.value)}
            />
            <Button type="submit">set</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default PomodoroCard;
