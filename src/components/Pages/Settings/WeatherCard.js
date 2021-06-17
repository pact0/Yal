import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Weather } from "../../../settings/updateSettings";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  color: var(--text);
  cursor: pointer;
  padding: 10px 0px;
`;

const Container = styled.div`
  height: 200px;
  margin: 60px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WeatherCard = () => {
  const hidden = useSelector((state) => state.settingsPages[1].show);

  const focusRef = useRef(null);
  const [cityValue, setCityValue] = useState("");
  const [apiValue, setApiValue] = useState("");

  const setWeatherData = (e) => {
    e.preventDefault();
    Weather.setCityName(cityValue);
    Weather.setKey(apiValue);
  };
  const keyPressHandle = (e) => {
    if (e.key === "Enter") {
      if (cityValue === "" || apiValue === "") {
        focusRef.current.focus();
      } else {
        Weather.setCityName(cityValue);
        Weather.setKey(apiValue);
      }
    }
  };
  return (
    <React.Fragment>
      {hidden && (
        <Container>
          <Form onSubmit={setWeatherData}>
            <Input
              type="text"
              placeholder="Town"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
              ref={(ref) => (focusRef.current = ref)}
              onKeyPress={keyPressHandle}
            />
            <Input
              type="text"
              placeholder="API key"
              value={apiValue}
              ref={(ref) => (focusRef.current = ref)}
              onKeyPress={keyPressHandle}
              onChange={(e) => setApiValue(e.target.value)}
            />
            <Button type="submit">change</Button>
          </Form>
        </Container>
      )}
    </React.Fragment>
  );
};

export default WeatherCard;
