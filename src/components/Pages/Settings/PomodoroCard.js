import styled from "@emotion/styled";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PomodoroPage as Pomodoro } from "../../../settings/updateSettings";

const Input = styled.input`
  color: var(--text);
  background: transparent;
  border: none;
  text-align: center;
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
  flex-direction: row;
  alig-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: transparent;
  color: var(--text);
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Container = styled.div`
  height: 200px;
  margin: 60px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: var(--text);
  font-size: 16px;
`;
const PomodoroCard = () => {
  const hidden = useSelector((state) => state.settingsPages[2].show);

  const [minutesWork, setMinutesWork] = useState("");
  const [secondsWork, setSecondsWork] = useState("");

  const [minutesBreak, setMinutesBreak] = useState("");
  const [secondsBreak, setSecondsBreak] = useState("");

  const setPomodoroData = (e) => {
    e.preventDefault();
    Pomodoro.setWorkMinutes(minutesWork);
    Pomodoro.setWorkSeconds(secondsWork);

    Pomodoro.setBreakMinutes(minutesBreak);
    Pomodoro.setBreakSeconds(secondsBreak);
  };

  return (
    <React.Fragment>
      {hidden && (
        <Container>
          <Form className="FORM" onSubmit={setPomodoroData}>
            <Section>
              <H1>Work</H1>
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
            </Section>
            <Section>
              <H1>Break</H1>
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
            </Section>
          </Form>
          <Button type="submit">change</Button>
        </Container>
      )}
    </React.Fragment>
  );
};

export default PomodoroCard;
