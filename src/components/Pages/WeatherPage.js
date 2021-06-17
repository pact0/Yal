import styled from "@emotion/styled/";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { Weather } from "../../settings/updateSettings";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Input = styled.input`
  color: var(--text);
  background: transparent;
  border: none;
  text-align: center;
  caret-color: var(--text);
  :focus {
    outline: none;
  }
  margin: 10px 0px;
`;
const Form = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  alig-items: center;
  justify-content: center;
`;
const WeatherImg = styled.img`
  color: var(--text);
  width: 70px;
  height: 70px;
  max-width: 70px;
  max-height: 70px;
  object-fit: cover;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  color: var(--text);
  margin: 10px 0px;
  font-size: 16px;
`;
const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Desc = styled.div`
  color: var(--text);
  font-size: 16px;
`;
const WeatherPage = () => {
  const focusRef = useRef(null);
  const hidden = useSelector((state) => state.pages[1].show);
  const [weather, setWeather] = useState("");
  const [key, setKey] = useState(Weather.getKey());
  const [cityName, setCityName] = useState(Weather.getCityName());

  const [cityValue, setCityValue] = useState("");
  const [apiValue, setApiValue] = useState("");

  const [temperature, setTemperature] = useState(true);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      if (cityValue === "" || apiValue === "") {
        focusRef.current.focus();
      } else {
        Weather.setCityName(cityValue);
        Weather.setKey(apiValue);
        setKey(apiValue);
        setCityName(cityValue);
      }
    }
  };
  useEffect(() => {
    function fun() {
      if (cityName && key)
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            setWeather({
              fahrenheit: Math.round(
                (parseFloat(data.main.temp) - 273.15) * 1.8 + 32
              ),
              celsius: Math.round(parseFloat(data.main.temp) - 273.15),
              desc: data.weather[0].description,
              main: data.weather[0].main,
              id: data.weather[0].id,
              icon: data.weather[0].icon,
            });
          })
          .catch(function (error) {
            setWeather("");
            console.log("WRONG CREDENTIALS", error);
          });
    }
    fun();
  }, [key, cityName]);

  const toggleTemperature = (e) => {
    e.preventDefault();
    setTemperature(!temperature);
  };

  return (
    <React.Fragment>
      {hidden && (
        <Container>
          {weather ? (
            <WeatherBox>
              {
                <WeatherImg
                  src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                />
              }
              <Desc>{weather.desc}</Desc>
              <Button onClick={toggleTemperature}>
                {temperature ? (
                  <span>{weather.celsius}°C</span>
                ) : (
                  <span>{weather.fahrenheit}°F</span>
                )}
              </Button>
            </WeatherBox>
          ) : (
            <div>
              <Form>
                <Input
                  ref={(ref) => {
                    focusRef.current = ref;
                  }}
                  focus="firstInput"
                  type="text"
                  placeholder="Town"
                  value={cityValue}
                  onChange={(e) => setCityValue(e.target.value)}
                  onKeyPress={handleEnterPress}
                />
                <Input
                  ref={(ref) => {
                    focusRef.current = ref;
                  }}
                  type="text"
                  placeholder="API key"
                  value={apiValue}
                  onChange={(e) => setApiValue(e.target.value)}
                  onKeyPress={handleEnterPress}
                />
              </Form>
            </div>
          )}
        </Container>
      )}
    </React.Fragment>
  );
};

export default WeatherPage;
