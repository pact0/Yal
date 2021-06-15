import styled from "@emotion/styled";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Weather } from "../../../settings/updateSettings";
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
const WeatherCard = () => {
  const hidden = useSelector((state) => state.settingsPages[1].show);

  const [cityValue, setCityValue] = useState("");
  const [apiValue, setApiValue] = useState("");

  const setWeatherData = (e) => {
    e.preventDefault();
    Weather.setCityName(cityValue);
    Weather.setKey(apiValue);
  };
  return (
    <div>
      {hidden && (
        <div>
          Change your weather settings
          <Form onSubmit={setWeatherData}>
            <Input
              type="text"
              placeholder="Town"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
            <Input
              type="text"
              placeholder="API key"
              value={apiValue}
              onChange={(e) => setApiValue(e.target.value)}
            />
            <Button>set</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
