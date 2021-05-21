import styled from "@emotion/styled/";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

const WeatherPage = () => {
  const hidden = useSelector((state) => state.pages[1].show);
  const [weather, setWeather] = useState("");
  const [placeholder, setPlaceholder] = useState("API key goes here");
  const [key, setKey] = useState(Weather.getKey());
  const [cityName, setCityName] = useState(Weather.getCityName());

  //   const cityName = useSelector((state) => state.weather.cityName)
  //   const key = useSelector((state) => state.weather.key)
  // const cityName = "Krakow";
  // const key = "647b280f043eeaab1be08d71b198610e";
  useEffect(async () => {
    if (cityName && key)
      await fetch(
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
          });
        })
        .catch(function (error) {
          setPlaceholder("¯\u005C_(ツ)_/¯");
          setWeather("");
          console.log(error);
        });
  }, []);
  console.log(weather);
  const fontSize = 50;
  const color = "var(--accent-color)";
  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <>
        {hidden && (
          <Container>
            {weather ? (
              <>
                {weather?.celsius}
                {weather?.main}
              </>
            ) : (
              <input placeholder={placeholder} />
            )}
          </Container>
        )}
      </>
    </CSSTransition>
  );
};

export default WeatherPage;
